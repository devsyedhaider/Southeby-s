const hidden = document.querySelector('.hidden');
const btnOk = document.getElementById('btnOk');
const cookieNotice = document.getElementById('cookieNotice');
const Search = document.getElementById('searchLink');
const searchDropdown = document.getElementById('searchDropdown');
const closeSearch = document.getElementById('closeSearch');
const closeProperties = document.getElementById('closeProperties');
const closeAgents = document.getElementById('closeAgents');
const closeStory = document.getElementById('closeStory');
const Properties = document.getElementById('PropertiesLink');
const PropertiesDropDown = document.getElementById('PropertiesDropDown');
const Agents = document.getElementById('AgentsLink');
const AgentsDropDown = document.getElementById('AgentsDropDown');
const Story = document.getElementById('StoryLink');
const StoryDropDown = document.getElementById('StoryDropDown');

// ------------------------ Ok Button ------------------------------------- //

btnOk.addEventListener('click', function() {
    cookieNotice.style.display = 'none';
});


// ----------------------- Search ---------------------------------------- //

Search.addEventListener('click', function() {
    searchDropdown.classList.toggle('hidden');
    PropertiesDropDown.classList.add('hidden');
    AgentsDropDown.classList.add('hidden');
    StoryDropDown.classList.add('hidden');
});

closeSearch.addEventListener('click', function() {
    searchDropdown.classList.add('hidden')
});


// ----------------------- Properties ---------------------------------------- //

Properties.addEventListener('click', function() {
    PropertiesDropDown.classList.toggle('hidden');
    searchDropdown.classList.add('hidden');
    AgentsDropDown.classList.add('hidden');
    StoryDropDown.classList.add('hidden');
});

closeProperties.addEventListener('click', function() {
    PropertiesDropDown.classList.add('hidden')
});


// ----------------------- Agents ---------------------------------------- //

Agents.addEventListener('click', function() {
    AgentsDropDown.classList.toggle('hidden');
    searchDropdown.classList.add('hidden');
    PropertiesDropDown.classList.add('hidden');
    StoryDropDown.classList.add('hidden');
});

closeAgents.addEventListener('click', function() {
    AgentsDropDown.classList.add('hidden')
});


// ----------------------- Story ---------------------------------------- //

Story.addEventListener('click', function() {
    StoryDropDown.classList.toggle('hidden');
    searchDropdown.classList.add('hidden');
    PropertiesDropDown.classList.add('hidden');
    AgentsDropDown.classList.add('hidden');
});

closeStory.addEventListener('click', function() {
    StoryDropDown.classList.add('hidden')
});