export default class Transpiler {
  static transpile(code, type) {
    if (type === 'ES6') {
      return Transpiler.es6(code);
    } else if (type === 'TypeScript') {
      return Transpiler.ts(code);
    } else {
      return code;
    }

  }

  static es6(code) {
    return Babel.transform(code, {presets: ['es2015']}).code
  }

  static ts(code) {
    var libDts = require("raw!../../node_modules/typescript/lib/lib.d.ts");
    let transpileOutput = Transpiler.transpileModule(libDts + code, {
      compilerOptions: {},
      reportDiagnostics: true
    });

    let error = '';
    transpileOutput.diagnostics.forEach((diag) => {
      error += diag.messageText.messageText ? diag.messageText.messageText : diag.messageText + "\n";
    });
    if (error) {
      throw error;
    }
    return transpileOutput.outputText;
  }


  /*
   * This function will compile source text from 'input' argument using specified compiler options.
   * If not options are provided - it will use a set of default compiler options.
   * Extra compiler options that will unconditionally be used by this function are:
   * - isolatedModules = true
   * - allowNonTsExtensions = true
   * - noLib = true
   * - noResolve = true
   */
  static transpileModule(input, transpileOptions) {
    var options = transpileOptions.compilerOptions ? ts.clone(transpileOptions.compilerOptions) : getDefaultCompilerOptions();
    //options.isolatedModules = true;
    // transpileModule does not write anything to disk so there is no need to verify that there are no conflicts between input and output paths.
    options.suppressOutputPathCheck = true;
    // Filename can be non-ts file.
    options.allowNonTsExtensions = true;
    options.experimentalDecorators = true;
    // We are not returning a sourceFile for lib file when asked by the program,
    // so pass --noLib to avoid reporting a file not found error.
    options.noLib = true;
    // We are not doing a full typecheck, we are not resolving the whole context,
    // so pass --noResolve to avoid reporting missing file errors.
    options.noResolve = true;
    // if jsx is specified then treat file as .tsx
    var inputFileName = transpileOptions.fileName || (options.jsx ? "module.tsx" : "module.ts");
    var sourceFile = ts.createSourceFile(inputFileName, input, options.target);
    if (transpileOptions.moduleName) {
      sourceFile.moduleName = transpileOptions.moduleName;
    }
    sourceFile.renamedDependencies = transpileOptions.renamedDependencies;
    var newLine = ts.getNewLineCharacter(options);
    // Output
    var outputText;
    var sourceMapText;
    // Create a compilerHost object to allow the compiler to read and write files
    var compilerHost = {
      getSourceFile: function (fileName, target) {
        return fileName === ts.normalizeSlashes(inputFileName) ? sourceFile : undefined;
      },
      writeFile: function (name, text, writeByteOrderMark) {
        if (ts.fileExtensionIs(name, ".map")) {
          ts.Debug.assert(sourceMapText === undefined, "Unexpected multiple source map outputs for the file '" + name + "'");
          sourceMapText = text;
        }
        else {
          ts.Debug.assert(outputText === undefined, "Unexpected multiple outputs for the file: '" + name + "'");
          outputText = text;
        }
      },
      getDefaultLibFileName: function () {
        return "lib.d.ts";
      },
      useCaseSensitiveFileNames: function () {
        return false;
      },
      getCanonicalFileName: function (fileName) {
        return fileName;
      },
      getCurrentDirectory: function () {
        return "";
      },
      getNewLine: function () {
        return newLine;
      },
      fileExists: function (fileName) {
        return fileName === inputFileName;
      },
      readFile: function (fileName) {
        return "";
      },
      directoryExists: function (directoryExists) {
        return true;
      }
    };
    var program = ts.createProgram([inputFileName], options, compilerHost);
    var diagnostics;
    if (transpileOptions.reportDiagnostics) {
      diagnostics = [];
      ts.addRange(/*to*/ diagnostics, /*from*/ program.getSyntacticDiagnostics(sourceFile));
      ts.addRange(/*to*/ diagnostics, /*from*/ program.getOptionsDiagnostics());
      ts.addRange(/*to*/ diagnostics, /*from*/ program.getSemanticDiagnostics());
    }

    // Emit
    let emitResult = program.emit();
    ts.Debug.assert(outputText !== undefined, "Output generation failed");
    return {outputText: outputText, diagnostics: diagnostics, sourceMapText: sourceMapText};
  }

}