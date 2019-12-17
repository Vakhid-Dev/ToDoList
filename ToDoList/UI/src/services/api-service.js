﻿import ModalService from "./modal-service";

class ApiService {

    createCategory(categoryName) {
        $.ajax({
            url: '/Home/CreateCategory',
            type: 'POST',
            data: { Name: categoryName },
            dataType: 'html',
            success: function () {
                $(".invalid-feedback").hide();
                $(".valid-feedback").show();
                $(".valid-feedback").html(`Category ${categoryName} successfully created`);
                renderCategory();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $(".valid-feedback").hide();
                $(".invalid-feedback").show();
                $(".invalid-feedback").html(xhr.responseText)
            }
        });

        function renderCategory(){
            let category = {
                categoryName: document.querySelector("#createList").value.toString().trim(),
            };

            const listForm = document.querySelector("#ListForm");
            let categoryName = document.querySelector("#createList");
            let tabNameLength = document.querySelector(`.tab-content .tab-pane[id="${category.categoryName}"]`);
            let listLength = document.querySelectorAll("#myList a").length;


            if (category.categoryName && isNaN(category.categoryName) && tabNameLength === null) {

                let Tab =new ModalService().Tabs();

                // render
                Tab.listContainer.insertAdjacentHTML("beforeend", Tab.renderLists(category.categoryName, listLength, 0));
                Tab.tabContainer.insertAdjacentHTML("beforeend", Tab.renderTabs(category.categoryName, listLength));

                //delete active class
                Tab.listContainer.querySelectorAll("a").forEach(value => value.classList.remove("active"));
                Tab.tabContainer.querySelectorAll(".tab-pane").forEach(value => value.classList.remove("active"));

                //add active class created category
                Tab.listContainer.querySelector(`a[data-name=${category.categoryName}]`).classList.add("active");
                Tab.tabContainer.querySelector(`.tab-pane[data-name=${category.categoryName}]`).classList.add("active");

                document.querySelector(".categoriesName").innerHTML = category.categoryName;

                // valid categoryName
                categoryName.classList.remove("is-invalid");
                categoryName.classList.add("is-valid");

                listForm.reset();
                
                $(".valid-feedback").html("");
                $(".invalid-feedback").html("");

                $('#ListModal').modal('hide');
            } else {
                categoryName.classList.add("is-invalid");
            }
        }
    }
    editCategory(categoryName){
        console.log(categoryName);
    }
}

export default ApiService;