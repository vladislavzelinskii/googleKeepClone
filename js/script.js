
var menuFlag = 1;

headerMenu.onclick = function() {
	if (menuFlag) {
		menu.style.width = "250px";
		workingField.style.marginLeft = "250px";
		menuNotesText.style.display = "flex";
		menuArchiveText.style.display = "flex";
		menuTrashText.style.display = "flex";
		menuFlag = 0;
	} else {
		menu.style.width = "100px";
		workingField.style.marginLeft = "100px";
		menuNotesText.style.display = "none";
		menuArchiveText.style.display = "none";
		menuTrashText.style.display = "none";
		menuFlag = 1;
	}
}

menuNotesButton.onmouseover = function() {
	if (menuFlag) {
		menu.style.boxShadow = "10px 0px 10px -10px grey";
		menu.style.width = "250px";
		menuNotesText.style.display = "flex";
		menuArchiveText.style.display = "flex";
		menuTrashText.style.display = "flex";
	}
}

menuArchiveButton.onmouseover = function() {
	if (menuFlag) {
		menu.style.boxShadow = "10px 0px 10px -10px grey";
		menu.style.width = "250px";
		menuNotesText.style.display = "flex";
		menuArchiveText.style.display = "flex";
		menuTrashText.style.display = "flex";
	}
}

menuTrashButton.onmouseover = function() {
	if (menuFlag) {
		menu.style.boxShadow = "10px 0px 10px -10px grey";
		menu.style.width = "250px";
		menuNotesText.style.display = "flex";
		menuArchiveText.style.display = "flex";
		menuTrashText.style.display = "flex";
	}
}

menu.onmouseleave = function() {
	if (menuFlag) {
		menu.style.removeProperty('box-shadow');
		menu.style.width = "100px";
		menuNotesText.style.display = "none";
		menuArchiveText.style.display = "none";
		menuTrashText.style.display = "none";
	}
}


menuNotesButton.onclick = function() {
	notesTab.style.display = "flex";
	archiveTab.style.display = "none";
	trashTab.style.display = "none";

	menuNotesButton.style.backgroundColor = "#feefc3";
	menuArchiveButton.style.backgroundColor = "inherit";
	menuTrashButton.style.backgroundColor = "inherit";

	headerIcon.style.display = "block";
	headerLocation.innerHTML = 'Keep';
}

menuArchiveButton.onclick = function() {
	notesTab.style.display = "none";
	archiveTab.style.display = "flex";
	trashTab.style.display = "none";

	menuNotesButton.style.backgroundColor = "inherit";
	menuArchiveButton.style.backgroundColor = "#feefc3";
	menuTrashButton.style.backgroundColor = "inherit";

	headerIcon.style.display = "none";
	headerLocation.innerHTML = 'Archive';
}

menuTrashButton.onclick = function() {
	notesTab.style.display = "none";
	archiveTab.style.display = "none";
	trashTab.style.display = "flex";

	menuNotesButton.style.backgroundColor = "inherit";
	menuArchiveButton.style.backgroundColor = "inherit";
	menuTrashButton.style.backgroundColor = "#feefc3";

	headerIcon.style.display = "none";
	headerLocation.innerHTML = 'Trash';
}


takeANote.style.backgroundColor = "inherit";

notePalette1.onclick = function() {
	takeANote.style.backgroundColor = "inherit";
}
notePalette2.onclick = function() {
	takeANote.style.backgroundColor = "#f28b82";
}
notePalette3.onclick = function() {
	takeANote.style.backgroundColor = "#fbbc04";
}
notePalette4.onclick = function() {
	takeANote.style.backgroundColor = "#fff475";
}
notePalette5.onclick = function() {
	takeANote.style.backgroundColor = "#ccff90";
}
notePalette6.onclick = function() {
	takeANote.style.backgroundColor = "#a7ffeb";
}
notePalette7.onclick = function() {
	takeANote.style.backgroundColor = "#cbf0f8";
}
notePalette8.onclick = function() {
	takeANote.style.backgroundColor = "#aecbfa";
}
notePalette9.onclick = function() {
	takeANote.style.backgroundColor = "#d7aefb";
}
notePalette10.onclick = function() {
	takeANote.style.backgroundColor = "#fdcfe8";
}
notePalette11.onclick = function() {
	takeANote.style.backgroundColor = "#e6c9a8";
}
notePalette12.onclick = function() {
	takeANote.style.backgroundColor = "#e8eaed";
}


noteField.onclick = function() {
	noteClickOrChange();
}


function noteClickOrChange() {
	noteTitleField.style.display = "flex";
	noteField.style.width = "450px";
	takeANote.style.height = "auto";
	noteStartLine.style.flexDirection = "column";
	noteArchiveButton.style.display = "inline-block";
	noteColorButton.style.display = "inline-block";
	noteCloseButton.style.display = "inline-block";

	noteField.style.height = "5px";
	noteField.style.height = (noteField.scrollHeight)+"px";
}
function textareaGrow(k) {
	var elementGrow = document.getElementById('noteListField' + k);
	elementGrow.style.height = "5px";
	elementGrow.style.height = (elementGrow.scrollHeight)+"px";
}
function noteTitleFieldGrow() {
	noteTitleField.style.height = "5px";
	noteTitleField.style.height = (noteTitleField.scrollHeight)+"px";
}
function editNoteTitleFieldGrow() {
	editNoteTitleField.style.height = "5px";
	editNoteTitleField.style.height = (editNoteTitleField.scrollHeight)+"px";
}
function editNoteFieldGrow() {
	editNoteField.style.height = "5px";
	editNoteField.style.height = (editNoteField.scrollHeight)+"px";
}


function noteCloseToArchive() {

	noteClose();

	var element = document.getElementById('noteBlocks').firstChild;
	var elementId = element.getAttribute("id");

	toArchive(elementId);

}

function editNoteCloseToArchive(i) {

	editNoteClose(i);

	toArchive(i);

}

var masOfNotes = [];

var i = 0;
var j;

function noteClose() {

	var noteTitleValue = noteTitleField.value;
	var noteFieldValue = noteField.value;
	var noteColor = takeANote.style.backgroundColor;

	var noteList = null;
	var elementLength = document.getElementById('noteList').childElementCount;

	if (elementLength > 1) {

		var elementLastChild = document.getElementById('noteList').lastChild.previousSibling;
		var attribute = elementLastChild.getAttribute("id");
		var numEl = parseInt(attribute.match(/\d+/));


		var masList = [];

		for (var k = 0; k <= numEl; k++) {
			var element = document.getElementById('noteListField' + k);
			if (element) {
				var statusCheck = document.getElementById('noteListStatus' + k);
				var status;
				if (statusCheck.checked) {
					status = 'checked';
				} else {
					status = 'unchecked';
				}
				masList.push({
					listStatus : status,
					listValue : element.value
				});
			}
		}

		noteList = masList;

	} 


	var notePhotoExist = document.getElementById('photo1');
	var notePhoto = null;


	if (notePhotoExist) {
		notePhoto = notePhotoExist.src;
	}
	

	if (noteFieldValue || notePhoto || noteTitleValue || noteList) {

		// location: note/archive
		// status: exist/deleted

		var obj = {
			id : i,
			title : noteTitleValue,
			field : noteFieldValue,
			color : noteColor,
			location : "note",
			status : "exist",
			photoSrc : notePhoto,
			list : noteList
		}

		masOfNotes.push(obj);

		for (var j = 0; j < masOfNotes.length; j++) {
			if (masOfNotes[j].id == i) {
				break;
			}
		}

		createNoteBlock(i, j);

		i++;

	}

	noteTitleField.style.display = "none";
	noteField.style.width = "355px";
	noteField.style.height = "20px"
	noteStartLine.style.flexDirection = "row";
	noteArchiveButton.style.display = "none";
	noteColorButton.style.display = "none";
	noteCloseButton.style.display = "none";


	var element = document.getElementById('preview');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

	var elementList = document.getElementById('noteList');
	while (elementList.firstChild) {
		elementList.removeChild(elementList.firstChild);
	}


	elementList.style.display = "none";
	noteField.style.display = "flex";

	listItem = 1;


	takeANote.style.backgroundColor = "inherit";

	noteTitleField.value = "";
	noteField.value = "";

	noteField.focus();

	var buttonList = document.getElementById('noteListButton');
	buttonList.innerHTML = '<i class="far fa-check-square"></i>';
	buttonList.classList = 'noteButton noteListButton tooltip';

	noteListButtonStatus = 0;

}

function editNoteClose(i) {

	var noteTitleValue = editNoteTitleField.value;
	var noteFieldValue = editNoteField.value;
	var noteColor = editANote.style.backgroundColor;

	var noteList = null;
	var elementLength = document.getElementById('editNoteList').childElementCount;

	if (elementLength > 1) {

		var elementLastChild = document.getElementById('editNoteList').lastChild.previousSibling;
		var attribute = elementLastChild.getAttribute("id");
		var numEl = parseInt(attribute.match(/\d+/));


		var masList = [];

		for (var k = 0; k <= numEl; k++) {
			var element = document.getElementById('noteListField' + k);
			if (element) {
				var statusCheck = document.getElementById('noteListStatus' + k);
				var status;
				if (statusCheck.checked) {
					status = 'checked';
				} else {
					status = 'unchecked';
				}
				masList.push({
					listStatus : status,
					listValue : element.value
				});
			}
		}

		noteList = masList;

	} 


	var notePhotoExist = document.getElementById('photo1');
	var notePhoto = null;


	if (notePhotoExist) {
		notePhoto = notePhotoExist.src;
	}



	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes[j].title = noteTitleValue;
	masOfNotes[j].field = noteFieldValue;
	masOfNotes[j].color = noteColor;
	masOfNotes[j].photoSrc = notePhoto;
	masOfNotes[j].list = noteList;

	if (noteColor == "rgb(255, 255, 255)" || noteColor == "rgb(0, 0, 0)") {
		noteColor = "inherit";
	}

	var noteFieldValueText = masOfNotes[j].field.replace(/\n/g,'<br/>');

	if (noteList) {
		var noteListEmptyFlag = 0;
		for (var n = 0; n < noteList.length; n++) {
			if (noteList[n].listValue) {
				noteListEmptyFlag = 1;
				break;
			}
		}
	}
	

	var noteListFull = 0;
	if (noteList && noteListEmptyFlag) {
		noteListFull = 1;
	}


	if (noteFieldValueText || notePhoto || noteTitleValue || noteListFull) {

		var emptyNote = document.getElementById('emptyNote' + i);
		if (emptyNote) {
			emptyNote.remove();
		}

		var element = document.getElementById('noteBlockBackground');
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}

		var id1 = document.getElementById('noteBlockTitle' + i);
		if (noteTitleValue) {
			id1.innerHTML = `${noteTitleValue}`;
			id1.style.display = "block";
		} else {
			id1.style.display = "none";
		}
		
		var id2 = document.getElementById('noteBlockField' + i);
		if (noteFieldValueText) {
			id2.innerHTML = `${noteFieldValueText}`;
			id2.style.display = "block";
		} else {
			id2.style.display = "none";
		}
		
		var id3 = document.getElementById(i);
		id3.style.backgroundColor = noteColor;

		if (notePhoto) {
			var element = document.getElementById('noteBlockPhoto' + i);
			if (element) {
				element.remove();
			}

			var newImg = document.createElement("img");
			newImg.setAttribute("class", "noteBlockPhoto");
			newImg.setAttribute("id", `noteBlockPhoto${i}`);
			newImg.setAttribute("onclick", `noteEdit(${i})`)
			newImg.setAttribute("src", `${notePhoto}`);
			newImg.setAttribute("width", "200");
			newImg.setAttribute("height", "auto");
			id3.prepend(newImg);
			
		} else {
			var element = document.getElementById('noteBlockPhoto' + i);
			if (element) {
				element.remove();
			}
		}


		var element = document.getElementById('noteBlockList' + i);
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}

		while (element.nextElementSibling.id.startsWith(`noteBlock${i}ListItem`)) {
			element.nextElementSibling.remove();
		}

		var buttonList = document.getElementById('noteBlockListButton' + i);
		buttonList.innerHTML = '<i class="far fa-check-square"></i>';
		buttonList.classList = 'noteBlockListButton tooltip';

		if (noteList) {
			
			for (var k = 0; k < noteList.length; k++) {

				var content = document.createElement("div");
				content.setAttribute("class", "noteBlockListItem");
				content.setAttribute("id", `noteBlock${i}ListItem${k}`);

				if (noteList[k].listStatus == 'checked') {

					content.innerHTML = `
						<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" checked
						onclick="noteBlockListStatusChange(${k}, ${i}, event)">
						<div class="noteBlockListField" id="noteBlock${i}ListField${k}" style="color: grey;
						text-decoration: line-through">${noteList[k].listValue.replace(/\n/g,'<br/>')}</div>
					`;

					if (settingsObject.checkedItemsToTheEnd == "checked") {
						var elementDiv = document.getElementById('noteBlockList' + i);
						elementDiv.after(content);
						elementDiv.style.borderBottom = "1px solid black";
					} else {
						var elementDiv = document.getElementById('noteBlockList' + i);
						elementDiv.append(content);
					}

				} else {

					content.innerHTML = `
						<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox"
						onclick="noteBlockListStatusChange(${k}, ${i}, event)">
						<div class="noteBlockListField" id="noteBlock${i}ListField${k}">${noteList[k].listValue.replace(/\n/g,'<br/>')}</div>
					`;

					var elementDiv = document.getElementById('noteBlockList' + i);
					elementDiv.append(content);

				}
				
				
			}

			if (noteListEmptyFlag) {
				var id3 = document.getElementById('noteBlockList' + i);
				id3.style.display = "block";
			} else {
				var id3 = document.getElementById('noteBlockList' + i);
				id3.style.display = "none";
			}

			elementDiv.setAttribute("onclick", `noteEdit(${i})`);

			var buttonList = document.getElementById('noteBlockListButton' + i);
			buttonList.innerHTML = '<i class="fas fa-font"></i>';
			buttonList.classList += ' noteBlockListToTextButton';

		}

		var buttons = document.getElementById('noteBlockButtons' + i);
		buttons.classList.remove('noteBlockButtonsPhoto');

		if (!noteTitleValue && !noteFieldValueText && !noteListFull && notePhoto) {
			var buttons = document.getElementById('noteBlockButtons' + i);
			buttons.classList.add('noteBlockButtonsPhoto');
		}


	} else {

		var id = document.getElementById(i);

		var emptyNote = document.getElementById('emptyNote' + i);
		if (!emptyNote) {
			var newDiv = document.createElement("div");
			newDiv.setAttribute("id", `emptyNote${i}`);
			newDiv.setAttribute("class", "emptyNote");
			newDiv.setAttribute("onclick", `noteEdit(${i})`);
			newDiv.innerHTML = 'Empty note';
			id.prepend(newDiv);
		}
		
		id.style.backgroundColor = noteColor;

		var id1 = document.getElementById('noteBlockTitle' + i);
		id1.style.display = "none";
		
		var id2 = document.getElementById('noteBlockField' + i);
		id2.style.display = "none";

		var id3 = document.getElementById('noteBlockList' + i);
		id3.style.display = "none";

		var element = document.getElementById('noteBlockPhoto' + i);
		if (element) {
			element.remove();
		}
		
	}

	noteBlockBackground.style.display = "none";

}


var inputFiles;

function inputPhoto() {

	inputFiles = document.getElementById('inputFile').files;

	if (inputFiles[0].type.startsWith('image/')) {

		var element = document.getElementById('photo1');
		if (element) {
			element.remove();
		}

		var imgBlock = document.createElement("div");
		imgBlock.setAttribute("class", "notePhotoBlock");
		imgBlock.innerHTML = `
			<img src="#" height="auto" width="500" id="photo1">
			<button class="notePhotoDeleteButton" onclick="photoDelete()" type="button">
				<i class="far fa-trash-alt"></i>
			</button>
		`;
		preview.appendChild(imgBlock);
		photo1.src = URL.createObjectURL(inputFiles[0]);


		noteClickOrChange();

	} else {
		alert("This type of file is not supported");
	}

}

function editInputPhoto() {

	inputFiles = document.getElementById('editInputFile').files;

	var imgBlock = document.createElement("div");
	imgBlock.setAttribute("class", "notePhotoBlock");
	imgBlock.innerHTML = `
		<img src="#" height="auto" width="500" id="photo1">
		<button class="editNotePhotoDeleteButton" onclick="editPhotoDelete()" type="button">
			<i class="far fa-trash-alt"></i>
		</button>
	`;


	var element = document.getElementById('editPreview');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}


	editPreview.appendChild(imgBlock);
	photo1.src = URL.createObjectURL(inputFiles[0]);

}

function editPhoto(i) {

	var emptyNote = document.getElementById('emptyNote' + i);
	if (emptyNote) {
		emptyNote.remove();
	}

	inputFiles = document.getElementById(`editFile${i}`).files;

	var element = document.getElementById(`noteBlockPhoto${i}`);
	if (element) {
		element.remove();
	}


	var newImg = document.createElement("img");
	newImg.setAttribute("class", "noteBlockPhoto");
	newImg.setAttribute("id", `noteBlockPhoto${i}`);
	newImg.setAttribute("onclick", `noteEdit(${i})`);

	newImg.src = URL.createObjectURL(inputFiles[0]);
	
	newImg.setAttribute("width", "200");
	newImg.setAttribute("height", "auto");

	id = document.getElementById(i);
	id.prepend(newImg);

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes[j].photoSrc = URL.createObjectURL(inputFiles[0]);

}

function photoDelete() {

	var element = document.getElementById('preview');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

}

function editPhotoDelete() {

	var element = document.getElementById('editPreview');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

}

var noteListButtonStatus = 0;

function noteListButtonFunction() {
	if (noteListButtonStatus) {
		noteListToText();
		noteListButtonStatus = 0;
	} else {
		noteListAdding();
		noteListButtonStatus = 1;
		
	}
}

function noteListToText() {

	var elementLastChild = document.getElementById('noteList').lastChild.previousSibling;
	var attribute = elementLastChild.getAttribute("id");
	var numEl = parseInt(attribute.match(/\d+/));


	var masList = [];

	var statusFlag = 0;

	for (var k = 0; k <= numEl; k++) {
		var element = document.getElementById('noteListField' + k);
		if (element) {
			var statusCheck = document.getElementById('noteListStatus' + k);
			var status;
			if (statusCheck.checked) {
				status = 'checked';
				statusFlag = 1;
			} else {
				status = 'unchecked';
			}
			masList.push({
				listStatus : status,
				listValue : element.value
			});
		}
	}

	if (statusFlag) {
		var confirmValue = confirm("Delete checked items?");
	}

	if (confirmValue) {

		function filterById(item) {
			if (item.listStatus != 'checked') {
				return true;
			}
			return false;
		}

		var result = masList.filter(filterById);
		var masList = result;

	}

	var masOfValue = [];
	for (var i = 0; i < masList.length; i++) {
		masOfValue.push(masList[i].listValue);
	}

	var textareaValue = masOfValue.join('\n');

	noteList.style.display = "none";
	noteField.style.display = "inline-block";

	noteField.value = textareaValue;

	noteField.style.height = "5px";
	noteField.style.height = (noteField.scrollHeight)+"px";

	var elementList = document.getElementById('noteList');
	while (elementList.firstChild) {
		elementList.removeChild(elementList.firstChild);
	}

	var buttonList = document.getElementById('noteListButton');
	buttonList.innerHTML = '<i class="far fa-check-square"></i>';
	buttonList.classList = 'noteButton noteListButton tooltip';

}

var listItem = 1;

function noteListAdding() {

	var noteFieldValue = document.getElementById('noteField').value;

	noteList.style.display = "flex";
	noteField.style.display = "none";

	if (noteFieldValue) {

		var numberOfRows = noteField.scrollHeight / 20;
		var list = noteFieldValue.split(/\n/g);

		noteField.value = '';

		for (var k = 0; k < list.length; k++) {
			var content = document.createElement("div");
			content.setAttribute("class", "noteListItem");
			content.setAttribute("id", "noteListItem" + k);

			content.innerHTML = `
				<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
				<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
				<textarea class="noteListField" id="noteListField${k}" oninput="textareaGrow(${k})"
				onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off">${list[k]}</textarea>
				<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
			`;

			var elementDiv = document.getElementById('noteList');
			elementDiv.append(content);
			textareaGrow(k);
		}

		var content = document.createElement("div");
		content.setAttribute("class", "noteListItem");
		content.setAttribute("id", "noteListItem" + k);
		content.innerHTML = `
			<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
			<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
			<i class="fas fa-plus" id="noteListNewItemIcon"></i>
			<textarea class="noteListField" id="noteListField${k}" placeholder="New item" oninput="noteListItemAdding()" 
			onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off"></textarea>
			<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
		`;
		noteList.append(content);

		var move1 = document.getElementById('noteListMove' + k);
		move1.style.display = "none";

		var status1 = document.getElementById('noteListStatus' + k);
		status1.style.display = "none";

		var delete1 = document.getElementById('noteListDelete' + k);
		delete1.style.display = "none";

		listItem = k + 1;
	
	} else {
		var content = document.createElement("div");
		content.setAttribute("class", "noteListItem");
		content.setAttribute("id", "noteListItem0");
		content.innerHTML = `
			<div class="noteListMoveButton" id="noteListMove0"><i class="fas fa-arrows-alt-v"></i></div>
			<input class="noteListStatus" id="noteListStatus0" type="checkbox" onclick="noteListStatusChange(0)">
			<i class="fas fa-plus" id="noteListNewItemIcon"></i>
			<textarea class="noteListField" id="noteListField0" placeholder="New item" oninput="noteListItemAdding()" 
			onfocus="noteListItemFocus(0)" onblur="noteListItemBlur(0)" autocomplete="off"></textarea>
			<div class="noteListDeleteButton tooltip" id="noteListDelete0" onclick="noteListItemDelete(0)"><i class="fas fa-times"></i></div>
		`;
		noteList.append(content);

		noteListMove0.style.display = "none";
		noteListStatus0.style.display = "none";
		noteListDelete0.style.display = "none";
	}

	noteClickOrChange();

	var buttonList = document.getElementById('noteListButton');
	buttonList.innerHTML = '<i class="fas fa-font"></i>';
	buttonList.classList += ' noteBlockListToTextButton';

	if (k) {
		var itemFocused = document.getElementById('noteListField' + k);
	} else {
		var itemFocused = document.getElementById('noteListField0');
	}
	
	itemFocused.focus();

}

function noteListItemAdding() {

	var element = document.getElementById('noteList').lastChild;

	var lastElementId = element.lastChild.previousSibling.getAttribute("id");
	var lastId = parseInt(lastElementId.match(/\d+/));

	listItem = lastId + 1;

	var newItemIcon = document.getElementById('noteListNewItemIcon');
	newItemIcon.remove();

	var content = document.createElement("div");
	content.setAttribute("class", "noteListItem");
	content.setAttribute("id", "noteListItem" + listItem);
	content.innerHTML = `
		<div class="noteListMoveButton" id="noteListMove${listItem}"><i class="fas fa-arrows-alt-v"></i></div>
		<input class="noteListStatus" id="noteListStatus${listItem}" type="checkbox" onclick="noteListStatusChange(${listItem})">
		<i class="fas fa-plus" id="noteListNewItemIcon"></i>
		<textarea class="noteListField" id="noteListField${listItem}" placeholder="New item" oninput="noteListItemAdding()" 
		onfocus="noteListItemFocus(${listItem})" onblur="noteListItemBlur(${listItem})" autocomplete="off"></textarea>
		<div class="noteListDeleteButton tooltip" id="noteListDelete${listItem}" onclick="noteListItemDelete(${listItem})"><i class="fas fa-times"></i></div>
	`;
	noteList.append(content);

	var element = document.getElementById('noteListField' + (listItem - 1));
	element.removeAttribute("oninput");
	element.removeAttribute("placeholder");
	element.setAttribute("oninput", `textareaGrow(${listItem - 1})`);
	textareaGrow(listItem - 1);

	var move1 = document.getElementById('noteListMove' + (listItem - 1));
	move1.style.display = "block";
	var move2 = document.getElementById('noteListMove' + listItem);
	move2.style.display = "none";

	var status1 = document.getElementById('noteListStatus' + (listItem - 1));
	status1.style.display = "inline-block";
	var status2 = document.getElementById('noteListStatus' + listItem);
	status2.style.display = "none";

	var delete1 = document.getElementById('noteListDelete' + (listItem - 1));
	delete1.style.display = "block";
	var delete2 = document.getElementById('noteListDelete' + listItem);
	delete2.style.display = "none";

	listItem++;

}

function noteListItemFocus(item) {
	var element = document.getElementById('noteListItem' + item);
	element.style.boxShadow = "0 1px 0px 0px #ddd , 0 -1px 0px 0px #ddd";
}

function noteListItemBlur(item) {
	var element = document.getElementById('noteListItem' + item);
	element.style.removeProperty('box-shadow');
}

function noteListStatusChange(item) {
	var element = document.getElementById('noteListStatus' + item);
	var id = document.getElementById('noteListField' + item);
	if (element.checked) {
		id.style.textDecoration = "line-through";
		id.style.color = "grey";
	} else {
		id.style.textDecoration = "none";
		id.style.color = "black";
	}
}

function noteBlockListStatusChange(id, i, event) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	var status = document.getElementById('noteBlock' + i + 'ListStatus' + id);
	var element = document.getElementById('noteBlock' + i + 'ListField' + id);
	var item = document.getElementById('noteBlock' + i + 'ListItem' + id);

	if (status.checked) {

		element.style.textDecoration = "line-through";
		element.style.color = "grey";
		masOfNotes[j].list[id].listStatus = "checked";

		if (settingsObject.checkedItemsToTheEnd == "checked") {
			var itemHTML = item.innerHTML;
			item.remove();

			var content = document.createElement("div");
			content.setAttribute("class", "noteBlockListItem");
			content.setAttribute("id", 'noteBlock' + i + 'ListItem' + id);

			content.innerHTML = itemHTML;

			var elementDiv = document.getElementById('noteBlockList' + i);
			elementDiv.after(content);

			elementDiv.style.borderBottom = "1px solid black";

			var status2 = document.getElementById('noteBlock' + i + 'ListStatus' + id);
			status2.checked = "true";
		}

	} else {

		element.style.textDecoration = "none";
		element.style.color = "black";
		masOfNotes[j].list[id].listStatus = "unchecked";

		if (settingsObject.checkedItemsToTheEnd == "checked") {

			var itemHTML = item.innerHTML;
			item.remove();

			var content = document.createElement("div");
			content.setAttribute("class", "noteBlockListItem");
			content.setAttribute("id", 'noteBlock' + i + 'ListItem' + id);

			content.innerHTML = itemHTML;

			var elementDiv = document.getElementById('noteBlockList' + i);
			elementDiv.append(content);

			var listStatusFlag = 0;

			for (var m = 0; m < masOfNotes[j].list.length; m ++) {
				if (masOfNotes[j].list[m].listStatus == "checked") {
					listStatusFlag = 1;
				}
			}

			if (!listStatusFlag) {
				elementDiv.style.borderBottom = "none";
			}

			var status2 = document.getElementById('noteBlock' + i + 'ListStatus' + id);
			status2.checked = false;

		}

	}
	if (event) {
		event.stopPropagation();
	}

}

function noteBlockListStatusChangeSettings(id, i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	var status = document.getElementById('noteBlock' + i + 'ListStatus' + id);
	var element = document.getElementById('noteBlock' + i + 'ListField' + id);
	var item = document.getElementById('noteBlock' + i + 'ListItem' + id);

	element.style.textDecoration = "line-through";
	element.style.color = "grey";
	masOfNotes[j].list[id].listStatus = "checked";

	var itemHTML = item.innerHTML;
	item.remove();

	var content = document.createElement("div");
	content.setAttribute("class", "noteBlockListItem");
	content.setAttribute("id", 'noteBlock' + i + 'ListItem' + id);

	content.innerHTML = itemHTML;

	var elementDiv = document.getElementById('noteBlockList' + i);
	elementDiv.append(content);

	elementDiv.style.borderBottom = "none";

	var status2 = document.getElementById('noteBlock' + i + 'ListStatus' + id);
	status2.checked = "true";

}


function editNoteListButtonFunction(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	if (masOfNotes[j].list) {
		editNoteListToText(i, j);
	} else {
		editNoteTextToList(i, j);
	}

}

function editNoteTextToList(i, j) {
	
	var noteFieldValue = document.getElementById('editNoteField').value;

	editNoteList.style.display = "block";
	editNoteField.style.display = "none";

	if (noteFieldValue) {

		var numberOfRows = editNoteField.scrollHeight / 20;
		var list = noteFieldValue.split(/\n/g);

		noteField.value = '';

		for (var k = 0; k < list.length; k++) {
			var content = document.createElement("div");
			content.setAttribute("class", "noteListItem");
			content.setAttribute("id", "noteListItem" + k);

			content.innerHTML = `
				<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
				<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
				<textarea class="noteListField" id="noteListField${k}" oninput="textareaGrow(${k})"
				onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off">${list[k]}</textarea>
				<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
			`;

			var elementDiv = document.getElementById('editNoteList');
			elementDiv.append(content);

			textareaGrow(k);
		}

		var content = document.createElement("div");
		content.setAttribute("class", "noteListItem");
		content.setAttribute("id", "noteListItem" + k);
		content.innerHTML = `
			<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
			<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
			<i class="fas fa-plus" id="noteListNewItemIcon"></i>
			<textarea class="noteListField" id="noteListField${k}" placeholder="New item" oninput="editNoteListItemAdding(${k})" 
			onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off"></textarea>
			<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
		`;
		editNoteList.append(content);

		var move1 = document.getElementById('noteListMove' + k);
		move1.style.display = "none";

		var status1 = document.getElementById('noteListStatus' + k);
		status1.style.display = "none";

		var delete1 = document.getElementById('noteListDelete' + k);
		delete1.style.display = "none";

	} else {
		var content = document.createElement("div");
		content.setAttribute("class", "noteListItem");
		content.setAttribute("id", "noteListItem0");
		content.innerHTML = `
			<div class="noteListMoveButton" id="noteListMove0"><i class="fas fa-arrows-alt-v"></i></div>
			<input class="noteListStatus" id="noteListStatus0" type="checkbox" onclick="noteListStatusChange(0)">
			<i class="fas fa-plus" id="noteListNewItemIcon"></i>
			<textarea class="noteListField" id="noteListField0" placeholder="New item" oninput="editNoteListItemAdding(0)" 
			onfocus="noteListItemFocus(0)" onblur="noteListItemBlur(0)" autocomplete="off"></textarea>
			<div class="noteListDeleteButton tooltip" id="noteListDelete0" onclick="noteListItemDelete(0)"><i class="fas fa-times"></i></div>
		`;
		editNoteList.append(content);

		noteListMove0.style.display = "none";
		noteListStatus0.style.display = "none";
		noteListDelete0.style.display = "none";
	}

	masOfNotes[j].field = '';
	masOfNotes[j].list = [];

	for (var m = 0; m < list.length; m++) {
		masOfNotes[j].list.push({
			listStatus : 'unchecked',
			listValue : list[m]
		});
	}

	editNoteField.value = '';

	var buttonList = document.getElementById('editNoteListButton');
	buttonList.innerHTML = '<i class="fas fa-font"></i>';
	buttonList.classList += ' noteBlockList';

	if (k) {
		var itemFocused = document.getElementById('noteListField' + k);
	} else {
		var itemFocused = document.getElementById('noteListField0');
	}
	
	itemFocused.focus();

}

function editNoteListToText(i, j) {
	
	var elementLastChild = document.getElementById('editNoteList').lastChild.previousSibling;
	var attribute = elementLastChild.getAttribute("id");
	var numEl = parseInt(attribute.match(/\d+/));


	var masList = [];

	var statusFlag = 0;

	for (var k = 0; k <= numEl; k++) {
		var element = document.getElementById('noteListField' + k);
		if (element) {
			var statusCheck = document.getElementById('noteListStatus' + k);
			var status;
			if (statusCheck.checked) {
				status = 'checked';
				statusFlag = 1;
			} else {
				status = 'unchecked';
			}
			masList.push({
				listStatus : status,
				listValue : element.value
			});
		}
	}

	if (statusFlag) {
		var confirmValue = confirm("Delete checked items?");
	}

	if (confirmValue) {

		function filterById(item) {
			if (item.listStatus != 'checked') {
				return true;
			}
			return false;
		}

		var result = masList.filter(filterById);
		var masList = result;

	}

	var masOfValue = [];
	for (var i = 0; i < masList.length; i++) {
		masOfValue.push(masList[i].listValue);
	}

	var textareaValue = masOfValue.join('\n');

	editNoteList.style.display = "none";
	editNoteField.style.display = "inline-block";

	editNoteField.value = textareaValue;

	editNoteField.style.height = "5px";
	editNoteField.style.height = (editNoteField.scrollHeight)+"px";

	var elementList = document.getElementById('editNoteList');
	while (elementList.firstChild) {
		elementList.removeChild(elementList.firstChild);
	}

	var buttonList = document.getElementById('editNoteListButton');
	buttonList.innerHTML = '<i class="far fa-check-square"></i>';
	buttonList.classList = 'noteButton noteListButton tooltip';

	masOfNotes[j].list = null;
	masOfNotes[j].field = textareaValue;

	editNoteField.focus();

}


var editListItem;

function editNoteListItemAdding(k) {

	editListItem = k + 1;

	var newItemIcon = document.getElementById('noteListNewItemIcon');
	newItemIcon.remove();

	var content = document.createElement("div");
	content.setAttribute("class", "noteListItem");
	content.setAttribute("id", "noteListItem" + editListItem);
	content.innerHTML = `
		<div class="noteListMoveButton" id="noteListMove${editListItem}"><i class="fas fa-arrows-alt-v"></i></div>
		<input class="noteListStatus" id="noteListStatus${editListItem}" type="checkbox" onclick="noteListStatusChange(${editListItem})">
		<i class="fas fa-plus" id="noteListNewItemIcon"></i>
		<textarea class="noteListField" id="noteListField${editListItem}" placeholder="New item"
		oninput="editNoteListItemAdding(${editListItem})" onfocus="noteListItemFocus(${editListItem})"
		onblur="noteListItemBlur(${editListItem})" autocomplete="off"></textarea>
		<div class="noteListDeleteButton tooltip" id="noteListDelete${editListItem}" onclick="noteListItemDelete(${editListItem})"><i class="fas fa-times"></i></div>
	`;
	editNoteList.append(content);

	var element = document.getElementById('noteListField' + (editListItem - 1));
	element.removeAttribute("oninput");
	element.removeAttribute("placeholder");
	element.setAttribute("oninput", `textareaGrow(${editListItem - 1})`);

	textareaGrow(editListItem - 1);

	var move1 = document.getElementById('noteListMove' + (editListItem - 1));
	move1.style.display = "block";
	var move2 = document.getElementById('noteListMove' + editListItem);
	move2.style.display = "none";

	var status1 = document.getElementById('noteListStatus' + (editListItem - 1));
	status1.style.display = "inline-block";
	var status2 = document.getElementById('noteListStatus' + editListItem);
	status2.style.display = "none";

	var delete1 = document.getElementById('noteListDelete' + (editListItem - 1));
	delete1.style.display = "block";
	var delete2 = document.getElementById('noteListDelete' + editListItem);
	delete2.style.display = "none";

}

function noteListItemDelete(m) {

	var element = document.getElementById('noteListItem' + m);
	element.remove();

}


function noteBlockTextListChange(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	if (masOfNotes[j].list) {
		noteBlockListToText(i, j);
	} else {
		noteBlockTextToList(i, j);		
	}

}

function noteBlockTextToList(i, j) {
	
	var noteBlockField = document.getElementById('noteBlockField' + i);
	var noteBlockFieldValue = masOfNotes[j].field;

	if (noteBlockFieldValue) {

		var list = noteBlockFieldValue.split(/\n/g);
		noteBlockField.innerHTML = '';
		noteBlockField.style.display = 'none';
		masOfNotes[j].field = "";

		masOfNotes[j].list = [];

		for (var k = 0; k < list.length; k++) {
			masOfNotes[j].list.push({
				listStatus : 'unchecked',
				listValue : list[k]
			});
		}

	}

	var noteList = masOfNotes[j].list;

	for (var k = 0; k < noteList.length; k++) {
		var content = document.createElement("div");
		content.setAttribute("class", "noteBlockListItem");
		content.setAttribute("id", `noteBlock${i}ListItem${k}`);
		if (noteList[k].listStatus == 'checked') {
			content.innerHTML = `
				<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" checked
				onclick="noteBlockListStatusChange(${k}, ${i}, event)">
				<div class="noteBlockListField" id="noteBlock${i}ListField${k}" style="color: grey; text-decoration: line-through">${noteList[k].listValue}</div>
			`;
			if (settingsObject.checkedItemsToTheEnd == "checked") {
				var elementDiv = document.getElementById('noteBlockList' + i);
				elementDiv.after(content);
			} else {
				var elementDiv = document.getElementById('noteBlockList' + i);
				elementDiv.append(content);
			}
			
		} else {
			content.innerHTML = `
				<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox"
				onclick="noteBlockListStatusChange(${k}, ${i}, event)">
				<div class="noteBlockListField" id="noteBlock${i}ListField${k}">${noteList[k].listValue}</div>
			`;
			var elementDiv = document.getElementById('noteBlockList' + i);
			elementDiv.append(content);
		}
		
	}

	var listStatusFlag = 0;

	for (var m = 0; m < masOfNotes[j].list.length; m ++) {
		if (masOfNotes[j].list[m].listStatus == "checked") {
			listStatusFlag = 1;
		}
	}

	if (!listStatusFlag) {
		elementDiv.style.borderBottom = "none";
	}

	elementDiv.style.display = 'block';
	elementDiv.setAttribute("onclick", `noteEdit(${i})`);

	var buttonIcon = document.getElementById('noteBlockListButton' + i);
	buttonIcon.innerHTML = '<i class="fas fa-font"></i>';
	buttonIcon.classList += ' noteBlockListToTextButton';

}

function noteBlockListToText(i, j) {

	var numEl = masOfNotes[j].list.length;

	var masList = [];

	var statusFlag = 0;

	for (var k = 0; k <= numEl; k++) {
		var element = document.getElementById(`noteBlock${i}ListField${k}`);
		if (element) {
			var statusCheck = document.getElementById(`noteBlock${i}ListStatus${k}`);
			var status;
			if (statusCheck.checked) {
				status = 'checked';
				statusFlag = 1;
			} else {
				status = 'unchecked';
			}
			masList.push({
				listStatus : status,
				listValue : element.innerHTML
			});
		}
	}

	if (statusFlag) {
		var confirmValue = confirm("Delete checked items?");
	}

	if (confirmValue) {

		function filterById(item) {
			if (item.listStatus != 'checked') {
				return true;
			}
			return false;
		}

		var result = masList.filter(filterById);
		var masList = result;

	}

	if (masList.length) {

		var masOfValue = [];
		for (var m = 0; m < masList.length; m++) {
			masOfValue.push(masList[m].listValue);
		}

		var textareaValue = masOfValue.join('<br>');
		var noteBlockField = document.getElementById('noteBlockField' + i);

		noteBlockField.style.display = "block";

		noteBlockField.innerHTML = textareaValue;
		masOfNotes[j].field = masOfValue.join('\n');

	}

	var buttons = document.getElementById('noteBlockButtons' + i);
	buttons.classList.remove('noteBlockButtonsPhoto');

	if (masOfNotes[j].photoSrc) {
		buttons.classList.add('noteBlockButtonsPhoto');
	}

	if (!masList.length && !masOfNotes[j].photoSrc && !masOfNotes[j].title) {

		var id = document.getElementById(i);
		var emptyNote = document.getElementById('emptyNote' + i);
		if (!emptyNote) {
			var newDiv = document.createElement("div");
			newDiv.setAttribute("id", `emptyNote${i}`);
			newDiv.setAttribute("class", "emptyNote");
			newDiv.setAttribute("onclick", `noteEdit(${i})`);
			newDiv.innerHTML = 'Empty note';
			id.prepend(newDiv);
		}

	}

	var noteBlockList = document.getElementById('noteBlockList' + i);	

	while (noteBlockList.firstChild) {
		noteBlockList.removeChild(noteBlockList.firstChild);
	}

	while (noteBlockList.nextElementSibling.id.startsWith(`noteBlock${i}ListItem`)) {
		noteBlockList.nextElementSibling.remove();
	}

	noteBlockList.style.display = "none";	

	masOfNotes[j].list = null;

	var buttonIcon = document.getElementById('noteBlockListButton' + i);
	buttonIcon.innerHTML = '<i class="far fa-check-square"></i>';
	buttonIcon.classList = 'noteBlockListButton tooltip';

}

function createNoteBlock(i, j) {

	var title = masOfNotes[j].title;
	var field = masOfNotes[j].field.replace(/\n/g,'<br/>');
	var color = masOfNotes[j].color;
	var photo;
	var list;

	if (color == "rgb(255, 255, 255)" || color == "rgb(0, 0, 0)") {
		color = "inherit";
	}

	if (masOfNotes[j].photoSrc) {
		photo = masOfNotes[j].photoSrc;
	}

	if (masOfNotes[j].list) {
		list = masOfNotes[j].list;
	}


	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", i);
	newDiv.setAttribute("class", "noteBlock");
	newDiv.setAttribute("style", `background-color: ${color}`);
	newDiv.innerHTML = `
		<div class="noteBlockTitle" id="noteBlockTitle${i}" onclick="noteEdit(${i})">${title}</div>
		<div class="noteBlockField" id="noteBlockField${i}" onclick="noteEdit(${i})">${field}</div>
		<div class="noteBlockList" id="noteBlockList${i}"></div>
		<div class="noteBlockButtons" id="noteBlockButtons${i}">
			<input class="editInputFile" type="file" id="editFile${i}" onchange="editPhoto(${i})" multiple>
			<label for="editFile${i}" class="noteBlockPhotoButton tooltip">
				<i class="far fa-image"></i>
			</label>
			<button class="noteBlockColorButton tooltip">
				<i class="fas fa-palette"></i>
				<div class="notePalette" id="notePalette${i}">
					<div class="notePalette1 tooltip" onclick="noteEditColor(${i}, 'inherit')"></div>
					<div class="notePalette2 tooltip" onclick="noteEditColor(${i}, '#f28b82')"></div>
					<div class="notePalette3 tooltip" onclick="noteEditColor(${i}, '#fbbc04')"></div>
					<div class="notePalette4 tooltip" onclick="noteEditColor(${i}, '#fff475')"></div>
					<div class="notePalette5 tooltip" onclick="noteEditColor(${i}, '#ccff90')"></div>
					<div class="notePalette6 tooltip" onclick="noteEditColor(${i}, '#a7ffeb')"></div>
					<div class="notePalette7 tooltip" onclick="noteEditColor(${i}, '#cbf0f8')"></div>
					<div class="notePalette8 tooltip" onclick="noteEditColor(${i}, '#aecbfa')"></div>
					<div class="notePalette9 tooltip" onclick="noteEditColor(${i}, '#d7aefb')"></div>
					<div class="notePalette10 tooltip" onclick="noteEditColor(${i}, '#fdcfe8')"></div>
					<div class="notePalette11 tooltip" onclick="noteEditColor(${i}, '#e6c9a8')"></div>
					<div class="notePalette12 tooltip" onclick="noteEditColor(${i}, '#e8eaed')"></div>
				</div>
			</button>
			<button class="noteBlockArchiveButton tooltip" id="noteBlockArchiveButton${i}" onclick="toArchive(${i})"><i class="fas fa-archive"></i></button>
			<button class="noteBlockListButton tooltip" id="noteBlockListButton${i}" onclick="noteBlockTextListChange(${i})"><i class="far fa-check-square"></i></button>
			<button class="noteBlockTrashButton tooltip" onclick="toTrash(${i})"><i class="far fa-trash-alt"></i></button>
		</div>
	`;


	if (photo) {
		var newImg = document.createElement("img");
		newImg.setAttribute("class", "noteBlockPhoto");
		newImg.setAttribute("id", `noteBlockPhoto${i}`);
		newImg.setAttribute("onclick", `noteEdit(${i})`)
		newImg.setAttribute("src", `${photo}`);
		newImg.setAttribute("width", "200");
		newImg.setAttribute("height", "auto");
		newDiv.prepend(newImg);
	}


	myDiv = document.getElementById('noteBlocks');
	myDiv.prepend(newDiv);


	if (list) {

		for (var k = 0; k < list.length; k++ ){
			var content = document.createElement("div");
			content.setAttribute("class", "noteBlockListItem");
			content.setAttribute("id", `noteBlock${i}ListItem${k}`);
			if (list[k].listStatus == 'checked') {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" checked 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}" style="color: grey;
					text-decoration: line-through">${list[k].listValue.replace(/\n/g,'<br/>')}</div>
				`;

				if (settingsObject.checkedItemsToTheEnd == "checked") {
					var elementDiv = document.getElementById('noteBlockList' + i);
					elementDiv.after(content);
					elementDiv.style.borderBottom = "1px solid black";
				} else {
					var elementDiv = document.getElementById('noteBlockList' + i);
					elementDiv.append(content);
				}

			} else {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}">${list[k].listValue.replace(/\n/g,'<br/>')}</div>
				`;

				var elementDiv = document.getElementById('noteBlockList' + i);
				elementDiv.append(content);


			}
			
			
		}

		elementDiv.setAttribute("onclick", `noteEdit(${i})`);

		var buttonIcon = document.getElementById('noteBlockListButton' + i);
		buttonIcon.innerHTML = '<i class="fas fa-font"></i>';
		buttonIcon.classList += ' noteBlockListToTextButton';

	} else {
		var listHideId = "noteBlockList" + i;
		var listHide = document.getElementById(listHideId);
		listHide.style.display = "none";
	}


	if (title == "") {
		var titleHideId = "noteBlockTitle" + i;
		var titleHide = document.getElementById(titleHideId);
		titleHide.style.display = "none";
	}

	if (!field) {
		var fieldHideId = "noteBlockField" + i;
		var fieldHide = document.getElementById(fieldHideId);
		fieldHide.style.display = "none";
	}

	if (!title && !field && !list && photo) {
		var buttons = document.getElementById('noteBlockButtons' + i);
		buttons.classList.add('noteBlockButtonsPhoto');
	}


	if (!headerViewFlag) {
		var noteView = document.getElementById(i);
		noteView.classList.add('noteBlockView');
	}

	noNotes.style.display = "none";

}

function noteEdit(i) {

	var newDiv = document.getElementById('noteBlockBackground');
	newDiv.innerHTML = `
		<form class="editANote" id="editANote">
			<div class="preview" id="editPreview">
					
			</div>
			<textarea id="editNoteTitleField" class="noteTitleField" oninput="editNoteTitleFieldGrow()"
			placeholder="Enter title" autocomplete="off"></textarea>
			<div id="editNoteList" class="editNoteList"></div>
			<div class="noteStartLine" id="editNoteStartLine">
				<textarea id="editNoteField" class="noteField" oninput="editNoteFieldGrow()"
				 placeholder="Note..." autocomplete="off"></textarea>
				<div class="noteButtons">
					<input class="inputFile" type="file" id="editInputFile" onchange="editInputPhoto(${i})" multiple>
					<label for="editInputFile" class="noteButton notePhotoButton tooltip">
						<i class="far fa-image"></i>
					</label>
					<button class="noteButton noteColorButton editNoteColorButton tooltip" id="editNoteColorButton" type="button">
						<i class="fas fa-palette"></i>
						<div class="notePalette" id="notePalette${i}">
							<div class="notePalette1 tooltip" onclick="noteEditColor(${i}, 'inherit', 'edit')"></div>
							<div class="notePalette2 tooltip" onclick="noteEditColor(${i}, '#f28b82', 'edit')"></div>
							<div class="notePalette3 tooltip" onclick="noteEditColor(${i}, '#fbbc04', 'edit')"></div>
							<div class="notePalette4 tooltip" onclick="noteEditColor(${i}, '#fff475', 'edit')"></div>
							<div class="notePalette5 tooltip" onclick="noteEditColor(${i}, '#ccff90', 'edit')"></div>
							<div class="notePalette6 tooltip" onclick="noteEditColor(${i}, '#a7ffeb', 'edit')"></div>
							<div class="notePalette7 tooltip" onclick="noteEditColor(${i}, '#cbf0f8', 'edit')"></div>
							<div class="notePalette8 tooltip" onclick="noteEditColor(${i}, '#aecbfa', 'edit')"></div>
							<div class="notePalette9 tooltip" onclick="noteEditColor(${i}, '#d7aefb', 'edit')"></div>
							<div class="notePalette10 tooltip" onclick="noteEditColor(${i}, '#fdcfe8', 'edit')"></div>
							<div class="notePalette11 tooltip" onclick="noteEditColor(${i}, '#e6c9a8', 'edit')"></div>
							<div class="notePalette12 tooltip" onclick="noteEditColor(${i}, '#e8eaed', 'edit')"></div>
						</div>
					</button>
					<button class="noteButton noteArchiveButton tooltip" id="editNoteArchiveButton" onclick="editNoteCloseToArchive(${i})"
					type="button"><i class="fas fa-archive"></i></button>
					<button class="noteButton noteListButton tooltip" id="editNoteListButton" onclick="editNoteListButtonFunction(${i})"
					type="button"><i class="far fa-check-square"></i></button>
					<button class="noteButton noteCloseButton" id="editNoteCloseButton" onclick="editNoteClose(${i}); return false;">Close</button>
				</div>
			</div>
		</form>
	`;


	noteBlockBackground.style.display = "block";
	editNoteTitleField.style.display = "flex";
	editNoteField.style.width = "450px";
	editNoteStartLine.style.flexDirection = "column";
	editNoteArchiveButton.style.display = "inline-block";
	editNoteColorButton.style.display = "inline-block";
	editNoteCloseButton.style.display = "inline-block";

//	noteBlockBackground.setAttribute("onclick", `editNoteClose(${i})`);


	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}


	var title = masOfNotes[j].title;
	var field = masOfNotes[j].field;
	var color = masOfNotes[j].color;
	var photo;
	var list;

	if (color == "inherit" && settingsObject.darkTheme == "checked") {
		color = "#000";
	} else if (color == "inherit" && settingsObject.darkTheme == "unchecked") {
		color = "#fff";
	}

	if (masOfNotes[j].photoSrc) {
		photo = masOfNotes[j].photoSrc;
	}

	if (masOfNotes[j].list) {
		list = masOfNotes[j].list;
	}

	if (photo) {
		
		var imgBlock = document.createElement("div");
		imgBlock.setAttribute("class", "notePhotoBlock");
		imgBlock.innerHTML = `
			<img src="${photo}" height="auto" width="500" id="photo1">
			<button class="editNotePhotoDeleteButton" onclick="editPhotoDelete()" type="button">
				<i class="far fa-trash-alt"></i>
			</button>
		`;
		editPreview.prepend(imgBlock);

	}


	if (list) {

		for (var k = 0; k < list.length; k++) {
			var content = document.createElement("div");
			content.setAttribute("class", "noteListItem");
			content.setAttribute("id", "noteListItem" + k);

			if (list[k].listStatus == 'checked') {
				content.innerHTML = `
					<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
					<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" checked  onclick="noteListStatusChange(${k})">
					<textarea class="noteListField" id="noteListField${k}" oninput="textareaGrow(${k})"
					onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off"
					style="color: grey; text-decoration: line-through">${list[k].listValue}</textarea>
					<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
				`;
			} else {
				content.innerHTML = `
					<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
					<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
					<textarea class="noteListField" id="noteListField${k}" oninput="textareaGrow(${k})"
					onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off">${list[k].listValue}</textarea>
					<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
				`;
			}

			var elementDiv = document.getElementById('editNoteList');
			elementDiv.append(content);

			textareaGrow(k);
		}

		var content = document.createElement("div");
		content.setAttribute("class", "noteListItem");
		content.setAttribute("id", "noteListItem" + k);
		content.innerHTML = `
			<div class="noteListMoveButton" id="noteListMove${k}"><i class="fas fa-arrows-alt-v"></i></div>
			<input class="noteListStatus" id="noteListStatus${k}" type="checkbox" onclick="noteListStatusChange(${k})">
			<i class="fas fa-plus" id="noteListNewItemIcon"></i>
			<textarea class="noteListField" id="noteListField${k}" placeholder="New item" 
			oninput="editNoteListItemAdding(${k})"
			onfocus="noteListItemFocus(${k})" onblur="noteListItemBlur(${k})" autocomplete="off"></textarea>
			<div class="noteListDeleteButton tooltip" id="noteListDelete${k}" onclick="noteListItemDelete(${k})"><i class="fas fa-times"></i></div>
		`;
		var elementDiv = document.getElementById('editNoteList');
		elementDiv.append(content);

		var move1 = document.getElementById('noteListMove' + k);
		move1.style.display = "none";

		var status1 = document.getElementById('noteListStatus' + k);
		status1.style.display = "none";

		var delete1 = document.getElementById('noteListDelete' + k);
		delete1.style.display = "none";

		editNoteField.style.display = "none";

		var buttonList = document.getElementById('editNoteListButton');
		buttonList.innerHTML = '<i class="fas fa-font"></i>';
		buttonList.classList += ' noteBlockListToTextButton';

	}


	editNoteTitleField.value = title;
	editNoteField.value = field;
	editANote.style.backgroundColor = color;


	var location = masOfNotes[j].location;

	if (location == "archive") {
		editNoteArchiveButton.setAttribute("onclick", `editNoteCloseReturnFromArchive(${i})`);
		editNoteArchiveButton.classList += " noteBlockReturnFromArchive";
	}


	editNoteFieldGrow();
	editNoteTitleFieldGrow();

	editNoteListener();

}

function noteEditColor(i, color, edit) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	if (color == "inherit" && settingsObject.darkTheme == "checked" && edit) {
		color = "#000";
	} else if (color == "inherit" && settingsObject.darkTheme == "unchecked" && edit) {
		color = "#fff";
	}

	masOfNotes[j].color = color;

	if (edit) {
		editANote.style.backgroundColor = color;
	} else {
		var id = document.getElementById(i);
		id.style.backgroundColor = color;
	}

}


function createArchiveBlock(i, j) {

	var title = masOfNotes[j].title;
	var field = masOfNotes[j].field.replace(/\n/g,'<br/>');
	var color = masOfNotes[j].color;
	var photo;
	var list;

	if (masOfNotes[j].photoSrc) {
		photo = masOfNotes[j].photoSrc;
	}

	if (masOfNotes[j].list) {
		list = masOfNotes[j].list;
	}


	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", i);
	newDiv.setAttribute("class", "noteBlock");
	newDiv.setAttribute("style", `background-color: ${color}`);
	newDiv.innerHTML = `
		<div class="noteBlockTitle" id="noteBlockTitle${i}" onclick="noteEdit(${i})">${title}</div>
		<div class="noteBlockField" id="noteBlockField${i}" onclick="noteEdit(${i})">${field}</div>
		<div class="noteBlockList" id="noteBlockList${i}"></div>
		<div class="noteBlockButtons" id="noteBlockButtons${i}">
			<input class="editInputFile" type="file" id="editFile${i}" onchange="editPhoto(${i})" multiple>
			<label for="editFile${i}" class="noteBlockPhotoButton tooltip">
				<i class="far fa-image"></i>
			</label>
			<button class="noteBlockColorButton tooltip">
				<i class="fas fa-palette"></i>
				<div class="notePalette" id="notePalette${i}">
					<div class="notePalette1 tooltip" onclick="noteEditColor(${i}, 'inherit')"></div>
					<div class="notePalette2 tooltip" onclick="noteEditColor(${i}, '#f28b82')"></div>
					<div class="notePalette3 tooltip" onclick="noteEditColor(${i}, '#fbbc04')"></div>
					<div class="notePalette4 tooltip" onclick="noteEditColor(${i}, '#fff475')"></div>
					<div class="notePalette5 tooltip" onclick="noteEditColor(${i}, '#ccff90')"></div>
					<div class="notePalette6 tooltip" onclick="noteEditColor(${i}, '#a7ffeb')"></div>
					<div class="notePalette7 tooltip" onclick="noteEditColor(${i}, '#cbf0f8')"></div>
					<div class="notePalette8 tooltip" onclick="noteEditColor(${i}, '#aecbfa')"></div>
					<div class="notePalette9 tooltip" onclick="noteEditColor(${i}, '#d7aefb')"></div>
					<div class="notePalette10 tooltip" onclick="noteEditColor(${i}, '#fdcfe8')"></div>
					<div class="notePalette11 tooltip" onclick="noteEditColor(${i}, '#e6c9a8')"></div>
					<div class="notePalette12 tooltip" onclick="noteEditColor(${i}, '#e8eaed')"></div>
				</div>
			</button>
			<button class="noteBlockArchiveButton tooltip" id="noteBlockArchiveButton${i}" onclick="returnFromArchive(${i})"><i class="fas fa-archive"></i></button>
			<button class="noteBlockListButton tooltip" id="noteBlockListButton${i}" onclick="noteBlockTextListChange(${i})"><i class="far fa-check-square"></i></button>
			<button class="noteBlockTrashButton tooltip" onclick="toTrash(${i})"><i class="far fa-trash-alt"></i></button>
		</div>
	`;

	if (photo) {
		var newImg = document.createElement("img");
		newImg.setAttribute("class", "noteBlockPhoto");
		newImg.setAttribute("id", `noteBlockPhoto${i}`);
		newImg.setAttribute("onclick", `noteEdit(${i})`)
		newImg.setAttribute("src", `${photo}`);
		newImg.setAttribute("width", "200");
		newImg.setAttribute("height", "auto");
		newDiv.prepend(newImg);
	}


	myDiv = document.getElementById('archiveBlocks');
	myDiv.prepend(newDiv);

	var archiveButton = document.getElementById('noteBlockArchiveButton' + i);
	archiveButton.classList += " noteBlockReturnFromArchive";


	if (list) {

		for (var k = 0; k < list.length; k++ ){
			var content = document.createElement("div");
			content.setAttribute("class", "noteBlockListItem");
			content.setAttribute("id", `noteBlock${i}ListItem${k}`);
			if (list[k].listStatus == 'checked') {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" checked 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}" style="color: grey; text-decoration: line-through">${list[k].listValue}</div>
				`;

				if (settingsObject.checkedItemsToTheEnd == "checked") {
					var elementDiv = document.getElementById('noteBlockList' + i);
					elementDiv.after(content);
					elementDiv.style.borderBottom = "1px solid black";
				} else {
					var elementDiv = document.getElementById('noteBlockList' + i);
					elementDiv.append(content);
				}

			} else {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}">${list[k].listValue}</div>
				`;
				var elementDiv = document.getElementById('noteBlockList' + i);
				elementDiv.append(content);
			}
			
			
		}

		elementDiv.setAttribute("onclick", `noteEdit(${i})`);

	} else {
		var listHideId = "noteBlockList" + i;
		var listHide = document.getElementById(listHideId);
		listHide.style.display = "none";
	}


	if (title == "") {
		var titleHideId = "noteBlockTitle" + i;
		var titleHide = document.getElementById(titleHideId);
		titleHide.style.display = "none";
	}

	if (!field) {
		var fieldHideId = "noteBlockField" + i;
		var fieldHide = document.getElementById(fieldHideId);
		fieldHide.style.display = "none";
	}

	if (!title && !field && !list && photo) {
		var buttons = document.getElementById('noteBlockButtons' + i);
		buttons.classList.add('noteBlockButtonsPhoto');
	}


	if (!headerViewFlag) {
		var noteView = document.getElementById(i);
		noteView.classList.add('noteBlockView');
	}

	noArchive.style.display = "none";

}

function createTrashBlock(i, j) {

	var title = masOfNotes[j].title;
	var field = masOfNotes[j].field.replace(/\n/g,'<br/>');
	var color = masOfNotes[j].color;
	var photo;
	var list;

	if (masOfNotes[j].photoSrc) {
		photo = masOfNotes[j].photoSrc;
	}

	if (masOfNotes[j].list) {
		list = masOfNotes[j].list;
	}


	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", i);
	newDiv.setAttribute("class", "noteBlock");
	newDiv.setAttribute("style", `background-color: ${color}`);
	newDiv.innerHTML = `
		<div class="noteBlockTitle" id="noteBlockTitle${i}" onclick="noteEdit(${i})">${title}</div>
		<div class="noteBlockField" id="noteBlockField${i}" onclick="noteEdit(${i})">${field}</div>
		<div class="noteBlockList" id="noteBlockList${i}"></div>
		<div class="noteBlockButtons" id="noteBlockButtons${i}">
			<button class="noteBlockTrashButton tooltip" id="noteBlockTrashButton${i}" onclick="returnFromTrash(${i})"><i class="fas fa-trash-restore-alt"></i></button>
			<button class="noteBlockDeleteButton tooltip" id="noteBlockDeleteButton${i}" onclick="deleteFromTrash(${i})"><i class="far fa-trash-alt"></i></button>
		</div>
	`;


	if (photo) {
		var newImg = document.createElement("img");
		newImg.setAttribute("class", "noteBlockPhoto");
		newImg.setAttribute("id", `noteBlockPhoto${i}`);
		newImg.setAttribute("onclick", `noteEdit(${i})`)
		newImg.setAttribute("src", `${photo}`);
		newImg.setAttribute("width", "200");
		newImg.setAttribute("height", "auto");
		newDiv.prepend(newImg);
	}


	myDiv = document.getElementById('trashBlocks');
	myDiv.prepend(newDiv);

	var trashButton = document.getElementById('noteBlockTrashButton' + i);
	trashButton.classList += " noteBlockReturnFromTrash";


	if (list) {

		for (var k = 0; k < list.length; k++ ){
			var content = document.createElement("div");
			content.setAttribute("class", "noteBlockListItem");
			content.setAttribute("id", `noteBlock${i}ListItem${k}`);
			if (list[k].listStatus == 'checked') {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" checked 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}" style="color: grey; text-decoration: line-through">${list[k].listValue}</div>
				`;
			} else {
				content.innerHTML = `
					<input class="noteBlockListStatus" id="noteBlock${i}ListStatus${k}" type="checkbox" 
					onclick="noteBlockListStatusChange(${k}, ${i}, event)">
					<div class="noteBlockListField" id="noteBlock${i}ListField${k}">${list[k].listValue}</div>
				`;
			}
			
			var elementDiv = document.getElementById('noteBlockList' + i);
			elementDiv.append(content);
		}

		elementDiv.setAttribute("onclick", `noteEdit(${i})`);

	} else {
		var listHideId = "noteBlockList" + i;
		var listHide = document.getElementById(listHideId);
		listHide.style.display = "none";
	}


	if (title == "") {
		var titleHideId = "noteBlockTitle" + i;
		var titleHide = document.getElementById(titleHideId);
		titleHide.style.display = "none";
	}

	if (!field) {
		var fieldHideId = "noteBlockField" + i;
		var fieldHide = document.getElementById(fieldHideId);
		fieldHide.style.display = "none";
	}

	if (!title && !field && !list && photo) {
		var buttons = document.getElementById('noteBlockButtons' + i);
		buttons.classList.add('noteBlockButtonsPhoto');
	}


	if (!headerViewFlag) {
		var noteView = document.getElementById(i);
		noteView.classList.add('noteBlockView');
	}

	noTrash.style.display = "none";

}

function toArchive(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes[j].location = "archive";
	masOfNotes[j].status = "exist";

	var div = document.getElementById(i);
	div.remove();

	createArchiveBlock(i, j);

	var noteBlocks = document.getElementById('noteBlocks'); 

	var flag = 0;

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].location == "note" && masOfNotes[j].status == "exist") {
			flag = 1;
		}
	}

	if (!flag) {
		noNotes.style.display = "block";
	}

}

function toTrash(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	
	masOfNotes[j].status = "deleted";

	var div = document.getElementById(i);
	div.remove();

	createTrashBlock(i, j);


	if (masOfNotes[j].location == "note") {

		var flag = 0;

		for (var j = 0; j < masOfNotes.length; j++) {
			if (masOfNotes[j].status == "exist" && masOfNotes[j].location == "note") {
				flag = 1;
			}
		}

		if (!flag) {
			noNotes.style.display = "block";
		}

	} else if (masOfNotes[j].location == "archive") {
		
		var flag = 0;

		for (var j = 0; j < masOfNotes.length; j++) {
			if (masOfNotes[j].status == "exist" && masOfNotes[j].location == "archive") {
				flag = 1;
			}
		}

		if (!flag) {
			noArchive.style.display = "block";
		}

	}

}

function deleteFromTrash(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes.splice(j, 1);

	var div = document.getElementById(i);
	div.remove();


	var flag = 0;

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].status == "deleted") {
			flag = 1;
		}
	}

	if (!flag) {
		noTrash.style.display = "block";
	}

}

function returnFromArchive(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes[j].location = "note";

	var div = document.getElementById(i);
	div.remove();

	createNoteBlock(i, j);

	var flag = 0;

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].location == "archive" && masOfNotes[j].status == "exist") {
			flag = 1;
		}
	}

	if (!flag) {
		noArchive.style.display = "block";
	}

}

function editNoteCloseReturnFromArchive(i) {
	
	editNoteClose(i);

	returnFromArchive(i);

}

function returnFromTrash(i) {

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].id == i) {
			break;
		}
	}

	masOfNotes[j].status = "exist";

	var div = document.getElementById(i);
	div.remove();

	if (masOfNotes[j].location == "note") {
		createNoteBlock(i, j);
	} else if (masOfNotes[j].location == "archive") {
		createArchiveBlock(i, j);
	} else {
		alert("Error!")
	}

	var flag = 0;

	for (var j = 0; j < masOfNotes.length; j++) {
		if (masOfNotes[j].status == "deleted") {
			flag = 1;
		}
	}

	if (!flag) {
		noTrash.style.display = "block";
	}

}

var headerViewFlag = 1;

function headerViewChange() {

	if (headerViewFlag) {
		var element = document.getElementById('headerViewButton');
		element.innerHTML = `
			<i class="fas fa-align-justify fa-2x"></i>
		`;
		headerViewFlag = 0;

		noteBlocks.className = "noteBlocksView";
		archiveBlocks.className = "noteBlocksView";
		trashBlocks.className = "noteBlocksView";
		element.className += " headerViewChanged";

		var elements = document.getElementsByClassName('noteBlock');
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.add('noteBlockView');
		}

	} else {
		var element = document.getElementById('headerViewButton');
		element.innerHTML = `
			<i class="fas fa-th-large fa-2x"></i>
		`;
		headerViewFlag = 1;

		noteBlocks.className = "noteBlocks";
		archiveBlocks.className = "noteBlocks";
		trashBlocks.className = "noteBlocks";
		element.classList.remove('headerViewChanged');

		var elements = document.getElementsByClassName('noteBlock');
		for (var i = 0; i < elements.length; i++) {
			elements[i].className = "noteBlock";
		}

	}

}


takeANote.addEventListener('keydown', function(event) {

	var element = document.getElementById('noteList').lastChild;

	if (event.keyCode == 38 && element) {

		var oldFieldFocus = parseInt(event.path[0].id.match(/\d+/));
		oldFieldFocus = oldFieldFocus - 1;
		var newFieldFocus = document.getElementById('noteListField' + oldFieldFocus);
		if (newFieldFocus) {
			newFieldFocus.focus();
		}

	}

	if (event.keyCode == 40 && element) {

		var oldFieldFocus = parseInt(event.path[0].id.match(/\d+/));
		oldFieldFocus = oldFieldFocus + 1;
		var newFieldFocus = document.getElementById('noteListField' + oldFieldFocus);
		if (newFieldFocus) {
			newFieldFocus.focus();
		}

	}

	if (event.keyCode == 13 && element && !event.shiftKey) {
		element = document.getElementById('noteList').lastChild;
		event.preventDefault();

		var oldField = parseInt(event.path[0].id.match(/\d+/));
		oldField = oldField + 1;
		var check = oldField + 1;
		var newField = document.getElementById('noteListField' + oldField);
		var newFieldCheck = document.getElementById('noteListField' + check);

		if (newField && !newFieldCheck) {
			var elementFocus = element.lastChild.previousSibling.previousSibling.previousSibling;
			elementFocus.focus();
		} else if (newField && newFieldCheck) {
			var newListItem = document.createElement('div');
			var listItem = 'aaa' + oldField;
			newListItem.setAttribute('class', 'noteListItem');
			newListItem.setAttribute('id', `noteListItem${listItem}`);
			newListItem.innerHTML = `
				<div class="noteListMoveButton" id="noteListMove${listItem}"><i class="fas fa-arrows-alt-v"></i></div>
				<input class="noteListStatus" id="noteListStatus${listItem}" type="checkbox" onclick="noteListStatusChange(${listItem})">
				<textarea class="noteListField" id="noteListField${listItem}" oninput="textareaGrow(${listItem})"
				onfocus="noteListItemFocus(${listItem})" onblur="noteListItemBlur(${listItem})" autocomplete="off"></textarea>
				<div class="noteListDeleteButton tooltip" id="noteListDelete${listItem}" onclick="noteListItemDelete(${listItem})"><i class="fas fa-times"></i></div>
			`;
			oldField = oldField - 1;
			var oldListItem = document.getElementById('noteListItem' + oldField);
			oldListItem.after(newListItem);


			var lastElementId = element.lastChild.previousSibling.getAttribute("id");
			var lastId = parseInt(lastElementId.match(/\d+/));


			var count = lastId - oldField + 1;

			var lastElementFlag = 1;

			for (count; count > 1; count--) {

				var lastItem = document.getElementById('noteListItem' + lastId);
				var lastMove = document.getElementById('noteListMove' + lastId);
				var lastStatus = document.getElementById('noteListStatus' + lastId);
				var lastField = document.getElementById('noteListField' + lastId);
				var lastDelete = document.getElementById('noteListDelete' + lastId);

				newId = lastId + 1;

				lastItem.setAttribute("id", `noteListItem${newId}`);
				lastMove.setAttribute("id", `noteListMove${newId}`);
				lastStatus.setAttribute("id", `noteListStatus${newId}`);
				lastField.setAttribute("id", `noteListField${newId}`);
				lastDelete.setAttribute("id", `noteListDelete${newId}`);

				lastStatus.setAttribute("onclick", `noteListStatusChange(${newId})`);
				lastField.setAttribute("onfocus", `noteListItemFocus(${newId})`);
				lastField.setAttribute("onblur", `noteListItemBlur(${newId})`);
				lastField.setAttribute("oninput", `textareaGrow(${newId})`);
				lastDelete.setAttribute("onclick", `noteListItemDelete(${newId})`);

				if (lastElementFlag) {
					lastField.setAttribute("oninput", `noteListItemAdding()`);
					lastElementFlag = 0;
				}

				lastId = lastId - 1;

			}

			lastId = listItem;

			var lastItem = document.getElementById('noteListItem' + lastId);
			var lastMove = document.getElementById('noteListMove' + lastId);
			var lastStatus = document.getElementById('noteListStatus' + lastId);
			var lastField = document.getElementById('noteListField' + lastId);
			var lastDelete = document.getElementById('noteListDelete' + lastId);

			newId = parseInt(lastId.match(/\d+/));

			lastItem.setAttribute("id", `noteListItem${newId}`);
			lastMove.setAttribute("id", `noteListMove${newId}`);
			lastStatus.setAttribute("id", `noteListStatus${newId}`);
			lastField.setAttribute("id", `noteListField${newId}`);
			lastDelete.setAttribute("id", `noteListDelete${newId}`);

			lastStatus.setAttribute("onclick", `noteListStatusChange(${newId})`);
			lastField.setAttribute("onfocus", `noteListItemFocus(${newId})`);
			lastField.setAttribute("onblur", `noteListItemBlur(${newId})`);
			lastField.setAttribute("oninput", `textareaGrow(${newId})`);
			lastDelete.setAttribute("onclick", `noteListItemDelete(${newId})`);

			lastField.focus();

		}

	}

	if (event.keyCode == 27) {

		noteClose();

	}

});

function editNoteListener() {

	editANote.addEventListener('keydown', function(event) {

		var element = document.getElementById('editNoteList').lastChild;

		if (event.keyCode == 38 && element) {

			var oldFieldFocus = parseInt(event.path[0].id.match(/\d+/));
			oldFieldFocus = oldFieldFocus - 1;
			var newFieldFocus = document.getElementById('noteListField' + oldFieldFocus);
			if (newFieldFocus) {
				newFieldFocus.focus();
			}

		}

		if (event.keyCode == 40 && element) {

			var oldFieldFocus = parseInt(event.path[0].id.match(/\d+/));
			oldFieldFocus = oldFieldFocus + 1;
			var newFieldFocus = document.getElementById('noteListField' + oldFieldFocus);
			if (newFieldFocus) {
				newFieldFocus.focus();
			}

		}

		if (event.keyCode == 13 && element && !event.shiftKey) {
			element = document.getElementById('editNoteList').lastChild;
			event.preventDefault();

			var oldField = parseInt(event.path[0].id.match(/\d+/));
			oldField = oldField + 1;
			var check = oldField + 1;
			var newField = document.getElementById('noteListField' + oldField);
			var newFieldCheck = document.getElementById('noteListField' + check);

			if (newField && !newFieldCheck) {
				var elementFocus = element.lastChild.previousSibling.previousSibling.previousSibling;
				elementFocus.focus();
			} else if (newField && newFieldCheck) {
				var newListItem = document.createElement('div');
				var listItem = 'aaa' + oldField;
				newListItem.setAttribute('class', 'noteListItem');
				newListItem.setAttribute('id', `noteListItem${listItem}`);
				newListItem.innerHTML = `
					<div class="noteListMoveButton" id="noteListMove${listItem}"><i class="fas fa-arrows-alt-v"></i></div>
					<input class="noteListStatus" id="noteListStatus${listItem}" type="checkbox" onclick="noteListStatusChange(${listItem})">
					<textarea class="noteListField" id="noteListField${listItem}" oninput="textareaGrow(${listItem})"
					onfocus="noteListItemFocus(${listItem})" onblur="noteListItemBlur(${listItem})" autocomplete="off"></textarea>
					<div class="noteListDeleteButton tooltip" id="noteListDelete${listItem}" onclick="noteListItemDelete(${listItem})"><i class="fas fa-times"></i></div>
				`;
				oldField = oldField - 1;
				var oldListItem = document.getElementById('noteListItem' + oldField);
				oldListItem.after(newListItem);


				var lastElementId = element.lastChild.previousSibling.getAttribute("id");
				var lastId = parseInt(lastElementId.match(/\d+/));


				var count = lastId - oldField + 1;

				var lastElementFlag = 1;

				for (count; count > 1; count--) {

					var lastItem = document.getElementById('noteListItem' + lastId);
					var lastMove = document.getElementById('noteListMove' + lastId);
					var lastStatus = document.getElementById('noteListStatus' + lastId);
					var lastField = document.getElementById('noteListField' + lastId);
					var lastDelete = document.getElementById('noteListDelete' + lastId);

					newId = lastId + 1;

					lastItem.setAttribute("id", `noteListItem${newId}`);
					lastMove.setAttribute("id", `noteListMove${newId}`);
					lastStatus.setAttribute("id", `noteListStatus${newId}`);
					lastField.setAttribute("id", `noteListField${newId}`);
					lastDelete.setAttribute("id", `noteListDelete${newId}`);

					lastStatus.setAttribute("onclick", `noteListStatusChange(${newId})`);
					lastField.setAttribute("onfocus", `noteListItemFocus(${newId})`);
					lastField.setAttribute("onblur", `noteListItemBlur(${newId})`);
					lastField.setAttribute("oninput", `textareaGrow(${newId})`);
					lastDelete.setAttribute("onclick", `noteListItemDelete(${newId})`);

					if (lastElementFlag) {
						lastField.setAttribute("oninput", `editNoteListItemAdding()`);
						lastElementFlag = 0;
					}

					lastId = lastId - 1;

				}

				lastId = listItem;

				var lastItem = document.getElementById('noteListItem' + lastId);
				var lastMove = document.getElementById('noteListMove' + lastId);
				var lastStatus = document.getElementById('noteListStatus' + lastId);
				var lastField = document.getElementById('noteListField' + lastId);
				var lastDelete = document.getElementById('noteListDelete' + lastId);

				newId = parseInt(lastId.match(/\d+/));

				lastItem.setAttribute("id", `noteListItem${newId}`);
				lastMove.setAttribute("id", `noteListMove${newId}`);
				lastStatus.setAttribute("id", `noteListStatus${newId}`);
				lastField.setAttribute("id", `noteListField${newId}`);
				lastDelete.setAttribute("id", `noteListDelete${newId}`);

				lastStatus.setAttribute("onclick", `noteListStatusChange(${newId})`);
				lastField.setAttribute("onfocus", `noteListItemFocus(${newId})`);
				lastField.setAttribute("onblur", `noteListItemBlur(${newId})`);
				lastField.setAttribute("oninput", `textareaGrow(${newId})`);
				lastDelete.setAttribute("onclick", `noteListItemDelete(${newId})`);

				lastField.focus();

			}

		}

		if (event.keyCode == 27) {

			noteClose();

		}

	});

}


var settingsObject = {
	newItemsToTheEnd : 'checked',
	checkedItemsToTheEnd : 'unchecked',
	darkTheme : 'unchecked'
};
	
function headerSettings() {
	
	var newDiv = document.getElementById('noteSettingsBackground');
	newDiv.innerHTML = `
		<form class="settingsModal" id="settingsModal">
			<h2>Settings</h2>
			<div class="settingsItem">
				<label for="settingsListNewItems" class="settingsLabel">Add new items to the end of the list</label>
				<input class="settingsCheckbox" id="settingsListNewItems" type="checkbox"></input>
			</div>
			<div class="settingsItem">
				<label for="settingsListCheckedItems" class="settingsLabel">Move selected items to the end of the list</label>
				<input class="settingsCheckbox" id="settingsListCheckedItems" type="checkbox"></input>
			</div>
			<div class="settingsItem">
				<label for="settingsColorScheme" class="settingsLabel">Use dark theme</label>
				<input class="settingsCheckbox" id="settingsColorScheme" type="checkbox"></input>
			</div>
			<div class="settingsButtons">
				<button class="settingsCanselButton" id="settingsCanselButton" onclick="settingsCloseCansel()" type="button">Cansel</button>
				<button class="settingsSaveButton" id="settingsSaveButton" onclick="settingsCloseSave()" type="button">Save</button>
			</div>
		</form>
	`;

	noteSettingsBackground.style.display = "block";


	if (settingsObject.newItemsToTheEnd == 'checked'){
		settingsListNewItems.checked = "true";
	}

	if (settingsObject.checkedItemsToTheEnd == 'checked'){
		settingsListCheckedItems.checked = "true";
	}

	if (settingsObject.darkTheme == 'checked'){
		settingsColorScheme.checked = "true";
		settingsModal.style.backgroundColor = "#000";
	}

}

function settingsCloseCansel() {

	var backgroundElement = document.getElementById('noteSettingsBackground');
	backgroundElement.innerHTML = '';
	backgroundElement.style.display = 'none';

}

function settingsCloseSave() {

	var status1 = 'unchecked';
	var status2 = 'unchecked';
	var status3 = 'unchecked';

	if (document.getElementById('settingsListNewItems').checked) {
		status1 = 'checked';
	}

	if (document.getElementById('settingsListCheckedItems').checked) {
		status2 = 'checked';
	}

	if (document.getElementById('settingsColorScheme').checked) {
		status3 = 'checked';
	}

	settingsObject.newItemsToTheEnd = status1;
	settingsObject.checkedItemsToTheEnd = status2;
	settingsObject.darkTheme = status3;

	var backgroundElement = document.getElementById('noteSettingsBackground');
	backgroundElement.innerHTML = '';
	backgroundElement.style.display = 'none';

	settingsChanges();

}

function settingsChanges() {

	var bodyElement = document.getElementsByTagName('body')[0];
	
	if (settingsObject.darkTheme == "checked") {
		bodyElement.style.color = "#fff";
		bodyElement.style.backgroundColor = "#000";
	} else {
		bodyElement.style.color = "#000";
		bodyElement.style.backgroundColor = "#fff"
	}


	if (settingsObject.checkedItemsToTheEnd == "checked") {

		for (var h = 0; h < masOfNotes.length; h ++) {
			for (var t = 0; t < masOfNotes[h].list.length; t++) {
				if (masOfNotes[h].list[t].listStatus == "checked") {
					console.log(h + '   ' + t);
					noteBlockListStatusChange(t, h);
				}
			}
		}

	} else {

		for (var h = 0; h < masOfNotes.length; h ++) {
			for (var t = 0; t < masOfNotes[h].list.length; t++) {
				if (masOfNotes[h].list[t].listStatus == "checked") {
					console.log(h + '   ' + t);
					noteBlockListStatusChangeSettings(t, h);
				}
			}
		}

	}

}
