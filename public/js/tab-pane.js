const navTabs = document.querySelectorAll(".nav-tabs");

navTabs.forEach(navTab => navTab.addEventListener("click", (e) => {
    const navLinks = navTab.querySelectorAll(".nav-link");
    if (event.target.tagName.toLowerCase() === 'a') { // check if user have clicked at <a/> tab
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove("active")); // remove active state of other link
        e.target.classList.add("active"); // add active state for target link

        const tabPane = document.querySelector(e.target.dataset.roleTab);
        const tab = tabPane.querySelector(e.target.dataset.toggleTab);
        const tabs = tabPane.querySelectorAll(".tab-pane");
        tabs.forEach(tab => tab.classList.remove("active"));
        tab.classList.add("active")
    }
}))