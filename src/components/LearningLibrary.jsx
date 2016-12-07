export default class LearningLibrary {

  static get() {
    //if (!LearningLibrary._library) {
    LearningLibrary._doLoad();
    //}
    return LearningLibrary._library;
  }

  static _doLoad() {
    var context = require.context("../learning-library", true, /^\.\/.*\.[j|t]s/);

    let library = LearningLibrary._doLoadLevel(context, '.');
    console.dir(library);

    LearningLibrary._library = library;
  }

  static _doLoadLevel(context, levelName) {
    let library = {};
    let index = context(levelName + '/index.js');
    index.forEach((name) => {
      if (name.endsWith('.js') || name.endsWith('.ts')) {
        library[name] = context(levelName + '/' + name);
      } else {
        library[name] = LearningLibrary._doLoadLevel(context, levelName + '/' + name);
      }
    });
    return library;
  }

}