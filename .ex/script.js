const menu = document.getElementById("icon-menu");

menu.addEventListener("click", function () {
  const element = document.getElementById("sidebar");
  element.classList.toggle("sidebar-toggle");

  const element2 = document.getElementById("title-site");
  element2.classList.toggle("closed");

  const sidemenu = document.querySelector(".menu-list");
  sidemenu.classList.toggle("closed");

  const closedmenu = document.getElementById("buttons-closed");
  closedmenu.classList.toggle("visible");

  const menufield = document.querySelectorAll(".button-menu");
  menufield.forEach(function (btn) {
    btn.classList.toggle("closed");
  });
});

const menu3 = document.getElementById("button-toggle-mob");

menu3.addEventListener("click", function () {
  const element = document.getElementById("sidebar-mobile");
  element.classList.toggle("open");
});

const menu4 = document.getElementById("icon-menu-mobile");

menu4.addEventListener("click", function () {
  const element = document.getElementById("sidebar-mobile");
  element.classList.toggle("open");
});

var menus = [
    { title: "Início",
      icon: "bx bx-home icon",
      link: "/index.html",
    },
    {
      title: "Administração",
      icon: "bx bx-line-chart",
      submenu: [
        {
          title: "Funcionários",
          link: "/index.html",
        },
        {
          title: "Grupos",
          link: "/index.html",
        },
      ],
    },
    {
      title: "Projetos",
      icon: "bx bxs-network-chart",
      submenu: [
        {
          title: "Projetos",
          link: "/index.html",
        },
        {
          title: "Gerentes",
          link: "/index.html",
        },
      ],
    },
  ];

const menuDiv = document.querySelector('#div-btn-menu');
const menuDivM = document.querySelector('#div-btn-menu-mobile');
const sideMobile = document.querySelector('#sidebar-mobile');

const menuList = document.createElement('ul');
menuList.classList.add('menu-list');

const menuListM = document.createElement('ul');
menuListM.classList.add('menu-list-mobile');

const buttonsClosed = document.createElement('div');
buttonsClosed.setAttribute("id", "buttons-closed");

menus.forEach(menu => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('item-menu');
    const menuItemC = document.createElement('div');
    menuItemC.setAttribute("class", "btn-group dropend");
    const menuItemM = document.createElement('li');
    menuItemM.classList.add('item-menu');

    if (menu.title == "Início") {
      menuItem.innerHTML = `<div class="button-menu"><a href="${menu.link}" class="title-btn-menu"><i class="${menu.icon} title-btn-menu-i"></i><p class="title-btn-menu-p">${menu.title}</p></a><i class='bx bxs-chevron-down arrow icon'></div>`;
      menuItemC.innerHTML = `<button type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="${menu.icon}"></i></button>`;
      menuItemM.innerHTML = `<div class="button-menu"><a href="${menu.link}" class="title-btn-menu"><i class="${menu.icon} title-btn-menu-i"></i><p class="title-btn-menu-p">${menu.title}</p></a><i class='bx bxs-chevron-down arrow icon'></div>`;
    } else {
      menuItem.innerHTML = `<div class="button-menu"><a class="title-btn-menu"><i class="${menu.icon} title-btn-menu-i"></i><p class="title-btn-menu-p">${menu.title}</p></a><i class='bx bxs-chevron-down arrow icon'></div>`;
      menuItemC.innerHTML = `<button type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="${menu.icon}"></i></button>`;
      menuItemM.innerHTML = `<div class="button-menu"><a class="title-btn-menu"><i class="${menu.icon} title-btn-menu-i"></i><p class="title-btn-menu-p">${menu.title}</p></a><i class='bx bxs-chevron-down arrow icon'></div>`;
    }

    if(menu.submenu) {
        const submenuList = document.createElement('ul');
        submenuList.classList.add('submenu-list');
        const submenuListC = document.createElement('ul');
        submenuListC.classList.add('dropdown-menu');
        const submenuListM = document.createElement('ul');
        submenuListM.classList.add('submenu-list');

        menu.submenu.forEach(submenuItem => {
            const submenuItemElement = document.createElement('li');
            submenuItemElement.classList.add('submenu-list-li');
            const submenuItemElementC = document.createElement('li');
            submenuItemElement.classList.add('submenu-list-li');
            const submenuItemElementM = document.createElement('li');
            submenuItemElementM.classList.add('submenu-list-li');

            submenuItemElement.innerHTML = `<a href="${submenuItem.link}">${submenuItem.title}</a>`;
            submenuItemElementC.innerHTML = `<a class="dropdown-item" href="${submenuItem.link}">${submenuItem.title}</a>`;
            submenuItemElementM.innerHTML = `<a href="${submenuItem.link}">${submenuItem.title}</a>`;

            submenuList.appendChild(submenuItemElement);
            submenuListC.appendChild(submenuItemElementC);
            submenuListM.appendChild(submenuItemElementM);
        })

        menuItem.appendChild(submenuList);
        menuItemC.appendChild(submenuListC);
        menuItemM.appendChild(submenuListM);
    }

    menuList.appendChild(menuItem);
    menuListM.appendChild(menuItemM);
    buttonsClosed.appendChild(menuItemC);
});

menuDiv.appendChild(menuList);
menuDivM.appendChild(menuListM);
menuDiv.appendChild(buttonsClosed);

let arrows = document.querySelectorAll(".menu-list-mobile .item-menu .title-btn-menu-p");
for (var i = 1; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    console.log(arrowParent);
  });
}

let arrows2 = document.querySelectorAll(".menu-list-mobile .item-menu .icon");
for (var i = 1; i < arrows2.length; i++) {
  arrows2[i].addEventListener("click", (e) => {
    let arrowParent2 = e.target.parentElement.parentElement.parentElement;
    arrowParent2.classList.toggle("showMenu");
    console.log(arrowParent2);
  });
}

let arrows3 = document.querySelectorAll(".menu-list-mobile .item-menu .button-menu");
for (var i = 1; i < arrows3.length; i++) {
  arrows3[i].addEventListener("click", (e) => {
    let arrowParent3 = e.target.parentElement;
    arrowParent3.classList.toggle("showMenu");
    console.log(arrowParent3);
  });
}

let arrows4 = document.querySelectorAll(".menu-list .title-btn-menu-p");
for (var i = 1; i < arrows4.length; i++) {
  arrows4[i].addEventListener("click", (e) => {
    let arrowParent4 = e.target.parentElement.parentElement.parentElement;
    arrowParent4.classList.toggle("showMenu");
    console.log(arrowParent4);
  });
}

let arrows5 = document.querySelectorAll(".menu-list .icon");
for (var i = 1; i < arrows5.length; i++) {
  arrows5[i].addEventListener("click", (e) => {
    let arrowParent5 = e.target.parentElement.parentElement.parentElement;
    arrowParent5.classList.toggle("showMenu");
    console.log(arrowParent5);
  });
}

let arrows6 = document.querySelectorAll(".menu-list .button-menu");
for (var i = 1; i < arrows6.length; i++) {
  arrows6[i].addEventListener("click", (e) => {
    let arrowParent6 = e.target.parentElement;
    arrowParent6.classList.toggle("showMenu");
    console.log(arrowParent6);
  });
}

var wdaList = [
    {
        id: "1",
        nomeFunc: "Ronald Alves"
    },
    {
        id: "2",
        nomeFunc: "Renan Medeiros"
    },
    {
        id: "3",
        nomeFunc: "Lavínia Matoso"
    },
    {
        id: "4",
        nomeFunc: "Caio"
    },
    {
        id: "5",
        nomeFunc: "Cauê"
    },
    {
        id: "6",
        nomeFunc: "Rhuan"
    },
    {
        id: "7",
        nomeFunc: "Grabriela"
    },
    {
        id: "8",
        nomeFunc: "Sabrine"
    },
];

const divGrid = document.querySelector('.grid-wda');

wdaList.forEach(wdal => {
    const divGriditem = document.createElement('div');
    divGriditem.classList.add('grid-wda-cell');

    divGriditem.innerHTML = `<div class="grid-wda-item">
                    <p class="wdaGridId">ID ${wdal.id}</p>
                    <p class="wdaGridTitle">${wdal.nomeFunc}</p>
                    <div class="wdaGridBtn">
                        <i id="icon-wda-config" class='bx bxs-cog btnConfigGrid'"></i>
                        <i id="icon-wda-delete" class='bx bxs-trash btnDeleteGrid'></i>
                    </div>
                    </div>`;

    divGrid.appendChild(divGriditem);
});

var noteList = [
    {
        func: "Ronald Alves",
        cod: "23760",
        fund: "Funcep"
    },
    {
        func: "Cauê",
        cod: "23761",
        fund: "Funcep"
    },
    {
        func: "Renan Medeiros",
        cod: "23762",
        fund: "Funcep"
    },
    {
        func: "Lavínia Matoso",
        cod: "23763",
        fund: "Funcep"
    },
    {
        func: "Caio",
        cod: "23764",
        fund: "Funcep"
    },
];

var tbodyTable = document.getElementById("tbody-table");

noteList.forEach(noteL => {
  let tr = tbodyTable.insertRow();

  let td_func = tr.insertCell();
  let td_cod = tr.insertCell();
  let td_fund = tr.insertCell();

  td_func.setAttribute("data-label", "Funcionário");
  td_cod.setAttribute("data-label", "Código");
  td_fund.setAttribute("data-label", "Fundação");

  td_func.innerText = noteL.func;
  td_cod.innerText = noteL.cod;
  td_fund.innerText = noteL.fund;
});

//DELETAR
let deleteButton = document.querySelectorAll(".btnDeleteGrid");
const deleteModal = document.getElementById("id-modal-delete-container");
const iconCloseDel = document.getElementById("icon-close-delete");
const iconCloseDel2 = document.getElementById("btn-canc");

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", (e) => {
        let btnParentElement = e.target.parentElement.parentElement;
        console.log(btnParentElement);
        deleteModal.classList.toggle("modal-delete-show");
    });
};

iconCloseDel.addEventListener("click", function () {
    deleteModal.classList.toggle("modal-delete-show");
});

iconCloseDel2.addEventListener("click", function () {
    deleteModal.classList.toggle("modal-delete-show");
});

const BtnAdd = document.getElementById("wda-add");
let BtnEdit = document.querySelectorAll(".btnConfigGrid");
const modalAdd = document.getElementById("id-modal-wda-container");
const closeBtnAdd = document.getElementById("icon-modal-close-wda");
const cancBtnAdd = document.getElementById("button-cancel");
const titleModalWda = document.getElementById("add-wda-title");


BtnAdd.addEventListener("click", function () {
    modalAdd.classList.toggle("modal-container-show");
    titleModalWda.innerText = "ADICIONAR FUNCIONÁRIO";
});

for (var i = 0; i < BtnEdit.length; i++) {
    BtnEdit[i].addEventListener("click", (e) => {
        let btnParentElement = e.target.parentElement.parentElement;
        console.log(btnParentElement);
        modalAdd.classList.toggle("modal-container-show");
        titleModalWda.innerText = "EDITAR FUNCIONÁRIO";
    });
};

closeBtnAdd.addEventListener("click", function () {
    modalAdd.classList.toggle("modal-container-show");
});

cancBtnAdd.addEventListener("click", function () {
    modalAdd.classList.toggle("modal-container-show");
});