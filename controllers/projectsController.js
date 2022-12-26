exports.projects_page = (req, res) => {
    res.render('projects', {
        user: req.user
    });
}

exports.add_project_page = (req, res) => {
    if (req.user?.isAdmin) {
        res.render("addProject", {
            user: req.user
        });
    } else {
        res.redirect("/auth/login");
    }
}

exports.edit_project = function (req, res) {
    if (req.user?.isAdmin) {
        Project.findOne({
            _id: req.params.projectID
        }, function (err, post) {
            res.render("editProject", {
                user: req.user,
                project: post
            });
        });
    } else {
        res.redirect("/auth/login");
    }
};

exports.new_project_post = function (req, res) {
    if (req.user?.isAdmin) {
        const project = new Project({
            title: req.body.title,
            githubLink: req.body.githubLink,
            techStacks: req.body.techStacks,
            demoLink: req.body.demoLink,
            description: req.body.description,
            images: req.files,
        });
        project.save();
        res.redirect("addProject");
    } else {
        res.redirect("/auth/login");
    }
};

exports.new_project_post = function (req, res) {
    if (req.user?.isAdmin) {
        const project = new Project({
            title: req.body.title,
            githubLink: req.body.githubLink,
            techStacks: req.body.techStacks,
            demoLink: req.body.demoLink,
            description: req.body.description,
            images: req.files,
        });
        project.save();
        res.redirect("addProject");
    } else {
        res.redirect("/auth/login");
    }
};

exports.edit_project_post = function (req, res) {
    if (req.user?.isAdmin) {
        Project.findOne({
            _id: req.params.projectID
        }, function (err, post) {
            let images = post.images.concat(req.files);
            Project.replaceOne({
                _id: req.params.projectID
            }, {
                title: req.body.title,
                githubLink: req.body.githubLink,
                techStacks: req.body.techStacks,
                demoLink: req.body.demoLink,
                description: req.body.description,
                images: images,
            },
                function (err, results) {
                    if (!err) {
                        res.redirect("/admin");
                    } else {
                        res.send(err);
                    }
                });

        });
    } else {
        res.redirect("/auth/login");
    }
};

exports.delete_project = function (req, res) {
    if (req.user?.isAdmin) {
      Project.deleteOne({
        _id: req.params.projectID
      }, function (err) {
        if (!err) {
          res.redirect(req.header('Referer'));
        } else {
          res.send(err);
        }
      });
    } else {
      res.redirect("/auth/login");
    }
  };
  
  exports.delete_image = function (req, res) {
    if (req.user?.isAdmin) {
      Project.findOne({
        _id: req.params.projectID
      }, function (err, post) {
        if (err) {
          console.log(err);
        } else {
          post.images.splice(req.params.imageIndex, 1);
          Project.updateOne({
            _id: req.params.projectID
          }, {
            images: post.images
          },
            function (err) {
              if (!err) {
                res.redirect(req.header('Referer'));
              } else {
                res.send(err);
              }
            });
        }
      });
    } else {
      res.redirect("/auth/login");
    }
  };