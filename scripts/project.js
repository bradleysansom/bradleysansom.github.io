var headline;
var image;
var unit;
var institution;
var blurb;
var linkText;
var rightBtn;
var leftBtn;
var button;
var tagsList;
var courseYear;
var course;
var pubDate;

var currentCategory;
var currentSubCategory;

var filtered;
var projects;
var projectsArray;
var projectsArrayTwo

var url;
var currentProject;

var categoryArray;
var subCategoryArray;

var articlesContainer;

var myOptions = {
    mergeCDATA: true,
    xmlns: false,
    attrsAsObject: false,
    stripAttrPrefix: true,
    childrenAsArray: false,
    textKey: 'text'
}

function getCurrentProject() {
    url = window.location.href;
    currentProject = url.split('?')[1]
    console.log(currentProject);
    projectPageInitialise();

}

function projectPageInitialise() {
    headline = document.getElementsByClassName("headline")[0];
    image = document.getElementById("carousel");
    unit = document.getElementsByClassName("unit")[0];
    institution = document.getElementsByClassName("institution")[0];
    blurb = document.getElementsByClassName("blurb")[0];
    linkText = document.getElementById("linkText");
    rightBtn = document.getElementsByClassName("right-arrow")[0];
    leftBtn = document.getElementsByClassName("left-arrow")[0];
    button = document.getElementById("visitButton");
    tagsList = document.getElementById("tagsList");
    courseYear = document.getElementsByClassName("courseYear")[0];
    course = document.getElementsByClassName("course")[0];
    pubDate = document.getElementsByClassName("pubDate")[0];
    fetchPosts("project");
}

function projectPageRender() {
    filtered = projectsArray.filter(project => project.guid.text.split("?")[1] == currentProject);
    console.log(filtered);
    if (filtered.length === 0) {
        projectNotFound();
    } else {

        // populate data fields
        headline.innerHTML = filtered[0].title.text;
        image.src = filtered[0].images[0].text;
        unit.innerHTML = filtered[0].unit.text;
        institution.innerHTML = filtered[0].institution.text;
        blurb.innerHTML = filtered[0].blurb.text;
        linkText.innerHTML = filtered[0].linkLabel.text;
        course.innerHTML = filtered[0].course.text;
        courseYear.innerHTML = filtered[0].year.text;
        pubDate.innerHTML = "Published " + filtered[0].pubDate.text;

        // initialise image array and link
        var pictures = filtered[0].images;
        var link = filtered[0].link.text;

        // set up carousel
        let position = 0;
        const moveRight = () => {
            console.log('moveRight');
            if (position >= pictures.length - 1) {
                position = 0
                image.src = pictures[position].text;
                return;
            }
            image.src = pictures[position + 1].text;
            position++;
        }
        const moveLeft = () => {
            console.log('moveLeft');
            if (position < 1) {
                position = pictures.length - 1;
                image.src = pictures[position].text;
                return;
            }
            image.src = pictures[position - 1].text;
            position--;
        }

        // event handlers for left and right and visit buttons
        rightBtn.addEventListener("click", moveRight);
        leftBtn.addEventListener("click", moveLeft);
        const visit = () => {
            window.location.href = link;
        }
        visitButton.addEventListener("click", visit);


        // render categories list
        var categories = filtered[0].category;
        for (let index = 0; index < categories.length; index++) {
            var tag = document.createElement("li");
            tag.innerHTML = categories[index].text;
            tagsList.appendChild(tag);

        }
    }
}




function homePageInitialise(filter, ordering) {
    fetchPosts("homePage", filter, ordering);
}

function homePageRender(filter, ordering) {
    // set up articles container
    articlesContainer = document.getElementById("articlesContainer");

    // specity filtering and ordering
    console.log("filtering projects by " + filter);
    console.log("ordering projects by " + ordering);


    if (filter === "all") {
        for (let index = 0; index < projectsArray.length; index++) {
            console.log(projectsArray[index].title.text);
            homePageSectionRender(projectsArray[index]);

        }
    }
}


function homePageSectionRender(project) {
    // create container for each project
    var projectContainer = document.createElement("article");
    projectContainer.setAttribute("id", project.guid.text.split("?")[1]);

    // add label
    var label = document.createElement("h4");
    label.setAttribute("class", "label");
    label.innerHTML = project.title.text;
    projectContainer.appendChild(label);

    console.log(project);
    console.log(project.images);


    var beneath = document.createElement("section");
    beneath.setAttribute("class", "beneath");

    var comment = document.createElement("section");
    comment.setAttribute("class", "comment");
    beneath.appendChild(comment);

    var controls = document.createElement("section");
    controls.setAttribute("class", "controls");

    var arrows = document.createElement("arrows");
    arrows.setAttribute("class", "arrows");

    var leftBtn = document.createElement("button");
    leftBtn.setAttribute("class", "left-arrow");
    leftBtn.setAttribute("title", "Previous image");

    var leftBtnArrowSpan = document.createElement("span");
    leftBtnArrowSpan.setAttribute("class", "material-symbols-outlined");

    var leftBtnArrow = document.createElement("span");
    leftBtnArrow.setAttribute("class", "icon-arrow-left");

    leftBtnArrowSpan.appendChild(leftBtnArrow);
    leftBtn.appendChild(leftBtnArrowSpan);

    var rightBtn = document.createElement("button");
    rightBtn.setAttribute("class", "right-arrow");
    rightBtn.setAttribute("title", "Next image");

    var rightBtnArrowSpan = document.createElement("span");
    rightBtnArrowSpan.setAttribute("class", "material-symbols-outlined");

    var rightBtnArrow = document.createElement("span");
    rightBtnArrow.setAttribute("class", "icon-arrow-right");

    rightBtnArrowSpan.appendChild(rightBtnArrow);
    rightBtn.appendChild(rightBtnArrowSpan);

    arrows.appendChild(leftBtn);
    arrows.appendChild(rightBtn);

    controls.appendChild(arrows);

    beneath.appendChild(controls);

    // add image




    // initialise image array and link
    var pictures = project.images;
    // var link = project.link.text;

    // set up carousel
    if (project.images !== undefined) {
        var image = document.createElement("img");
        image.setAttribute("class", "carousel");
        image.setAttribute("width", "100%");
        image.setAttribute("height", "250px");

        if (Array.isArray(project.images)) {
            image.src = project.images[0].text;


            let position = 0;
            const moveRight = () => {
                console.log('moveRight');
                if (position >= pictures.length - 1) {
                    position = 0
                    image.src = pictures[position].text;
                    return;
                }
                image.src = pictures[position + 1].text;
                position++;
            }
            const moveLeft = () => {
                console.log('moveLeft');
                if (position < 1) {
                    position = pictures.length - 1;
                    image.src = pictures[position].text;
                    return;
                }
                image.src = pictures[position - 1].text;
                position--;
            }
            // event handlers for left and right and visit buttons
            rightBtn.addEventListener("click", moveRight);
            leftBtn.addEventListener("click", moveLeft);
        } else {
            image.src = project.images.text;
        }
        projectContainer.appendChild(image);
    }
    projectContainer.appendChild(beneath);

    /* if (link !== undefined) {
        const visit = () => {
            window.location.href = link;
        }
        visitButton.addEventListener("click", visit);
    } */

    // projectContainer.appendChild(link);

    articlesContainer.appendChild(projectContainer);
}


async function fetchPosts(pageType, filter, ordering) {
    let response = await fetch("https://bradleysans.uk/projects/posts.xml");

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        projects = await response.text();
        // console.log(projects);
        projectsArray = xmlToJSON.parseString(projects, myOptions).rss.channel.item;
        console.log(projectsArray);


        if (pageType === "project") {
            console.log("page type: project");
            projectPageRender();
        } else if (pageType === "homePage") {
            console.log("page type: homepage");
            homePageRender(filter, ordering);
        }






    } else {
        alert("HTTP-Error: " + response.status);
    }
}
function projectNotFound() {
    console.log("project not found");
    document.getElementById("headline").innerHTML = "Project not found";
}




