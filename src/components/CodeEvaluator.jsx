import Transpiler from './Transpiler.jsx';

export default class CodeEvaluator {
  static eval(type, code, logFn) {

    let transpiledCode;
    try {
      window.logFn = logFn;
      transpiledCode = Transpiler.transpile(code, type);
    } catch (error) {
      logFn('<span class="error transpile">[Transpile Error] ' + error + '</span>');
      throw error;
    }

    try {
      let evalCode = `(function() {
          function run() {\n`
          + transpiledCode +
          `\n}
                var console = {
                    log: logFn
                };
                run();
             })();`;

      //console.log(evalCode);
      window.eval(evalCode);
    } catch (error) {
      logFn('<span class="error run">' + error + '</span>');
      throw error;
    }
  }
}