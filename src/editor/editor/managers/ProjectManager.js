b3e.editor.ProjectManager = function(editor) {
  "use strict";

    // BOBE EDIT

  console.log("Making a ProjectManager!\n");

  /**
   * Creates a new project.
   */
  this.create = function() {
    this.close();

    var project = new b3e.project.Project(editor);
    editor.addChild(project);
    editor._project = project;
    editor.trigger('projectcreated', editor._project);
    
    editor._project.trees.add();
  };

  /**
   * Loads a project from data.
   */
  this.open = function(data) {
    this.close();

    // BOBE EDIT
    console.log("I think I'm opening something!\n");

    var project = new b3e.project.Project(editor);
    editor.addChild(project);
    editor._project = project;

    console.log("Importing...\n");
    console.log("Data: " + JSON.stringify(data, null, 2));
    
    editor.import.projectAsData(data);
    editor.trigger('projectopened', editor._project);
    editor.clearDirty();
  };

  /**
   * Exit the current project.
   */
  this.close = function() {
    var project = editor._project;
    if (project) {
      editor.removeChild(project);
      editor.trigger('projectclosed', project);
    }
  };

  /**
   * Gets the current project. Returns `null` if none.
   */
  this.get = function() {
    return editor._project;
  };


  this._applySettings = function(settings) {
    if (editor._project) {
      editor._project._applySettings(settings);
    }
  };
};
