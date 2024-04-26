exports.listStudentsPage = (req, res) => {
    res.render("list-students", { title: "List of Students" });
}

exports.addUpdateStudentsPage = (req, res) => {
    res.render("add-update-student");
}