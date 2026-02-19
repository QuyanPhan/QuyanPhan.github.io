function showFilter() 
{
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {

    var opinion = document.getElementById("opinionCheckbox").checked;
    var recipe = document.getElementById("recipeCheckbox").checked;
    var update = document.getElementById("updateCheckbox").checked;

    var list = document.getElementById("articleList").getElementsByTagName("article");

    for (var i = 0; i < list.length; i++) {

        if (list[i].className == "opinion") {
            if (opinion) list[i].style.display = "block";
            else list[i].style.display = "none";
        }

        if (list[i].className == "recipe") {
            if (recipe) list[i].style.display = "block";
            else list[i].style.display = "none";
        }

        if (list[i].className == "update") {
            if (update) list[i].style.display = "block";
            else list[i].style.display = "none";
        }
    }
}


function addNewArticle() {

    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;

    var type = "";

    if (document.getElementById("opinionRadio").checked)
        type = "opinion";

    if (document.getElementById("recipeRadio").checked)
        type = "recipe";

    if (document.getElementById("lifeRadio").checked)
        type = "update";

    if (title == "" || text == "" || type == "") {
        alert("Fill all fields");
        return;
    }

    var a = document.createElement("article");
    a.className = type;

    var s = document.createElement("span");
    s.className = "marker";

    if (type == "opinion") s.innerHTML = "Opinion";
    if (type == "recipe") s.innerHTML = "Recipe";
    if (type == "update") s.innerHTML = "Update";

    var h = document.createElement("h2");
    h.innerHTML = title;

    var p = document.createElement("p");
    p.innerHTML = text;

    a.appendChild(s);
    a.appendChild(h);
    a.appendChild(p);

    document.getElementById("articleList").appendChild(a);


    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";

    document.getElementById("opinionCheckbox").checked = false;
    document.getElementById("recipeCheckbox").checked = false;
    document.getElementById("updateCheckbox").checked = false;


    if (type == "opinion")
        document.getElementById("opinionCheckbox").checked = true;

    if (type == "recipe")
        document.getElementById("recipeCheckbox").checked = true;

    if (type == "update")
        document.getElementById("updateCheckbox").checked = true;

    filterArticles();
}
