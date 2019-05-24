$(document).ready(
    function(){
      $(document).on( 'click' , '#addToListFieldButton',
        function(){
              var toAdd = $(this).siblings('#addToListFieldId').val();
              var deadLine = $(this).siblings('#dateFieldForTask').val();
              var newItemWrpper = '<div class="d-flex flex-row flex-wrap align-items-center justify-content-between" id="taskDetails">' +
              '<div class="d-flex flex-row-reverse justify-content-center align-items-center" id="nameAndTimeWrapper">' +
              '<time id="deadLineTime">' + deadLine + '</time>' +
              '<h6 id="taskTitle">' + toAdd + '</h6>' +
              '<div id="checkBoxContainer" class="checkbox-container circular-container">' +
                    '<label class="checkbox-label">' +
                        '<input type="checkbox" id="taskDetailsCheckBox">' +
                        '<span class="checkbox-custom circular"></span>' +
                      '</label>' +
              '</div></div>' +
              '<div class="d-flex flex-row align-items-center justify-content-center">' +
                '<i id="editTaskText" class="fas fa-edit"></i>' +
                '<i id="taskDelteIcon" class="fas fa-trash"></i>' +
              '</div>' +
              '<div class="beShownOrNot d-flex flex-column align-items-center justify-content-center" id="editCurrentItemField"> '+
                '<input type="text" id="editedName" name="" placeholder="task name">' +
                '<input type="date" id="editedDate" value="">' +
                '<button id="editTaskButton" class="btn btn-success" type="button" name="button">edit</button>' +
              '</div>' +
              '</div>';
             $(this).parent().siblings('#tasksList').append(newItemWrpper);
        });

        $(document).on('click' , '#addToListButton',
            function(){
                $(this).parent().siblings('#addToListField').toggleClass('beShownOrNot');
                // var toAdd = $('input[name=ListItem]').val();
                //  $('ol').append('<li>' + toAdd + '</li>');
            });

        $(document).on('change', '#taskDetailsCheckBox' ,function () { 
            if($(this).is(':checked')){
                $(this).parent().parent().parent().addClass('endedTask');      
                $(this).parent().parent().addClass('beShownOrNot');         
            }
            else{
              $(this).parent().parent().parent().removeClass('endedTask');
            }
        });
      
        $(document).on('click','#taskDelteIcon' , function(){
            $(this).parent().parent().addClass('beShownOrNot');
        });

        $('#addListButton').click(
          function(){
            $('#addnewListFeild').toggleClass('beShownOrNot');
            $('#addNewListButtonTitle').toggleClass('beShownOrNot');
          }
        );

        $('#addnewListFeildButton').click(
          function(){
            var toAddTitle = $('#addnewListFeildInput').val();
            var newListWrapper = ' <div class="row w-100 listCarousel d-flex flex-column align-items-center" id="listWrapper">' +
            ' <div class="d-flex justify-content-center align-items-center" id="listTile">' +
            '<h6>' + toAddTitle + '</h6></div>' +
            '<div class="col-12 d-flex flex-column align-items-center" id="tasksWrapper">' +
            '<div class="row w-100 d-flex flex-column align-items-center" id="tasksList"></div>' +
            '<div class="beShownOrNot d-flex flex-column align-items-center justify-content-center" id="addToListField">' +
              '<input type="text" id="addToListFieldId" name="" placeholder="task name">' +
              '<input type="date" id="dateFieldForTask" value="">' +
              '<button id="addToListFieldButton" class="btn btn-success" type="button" name="button">add</button>' +
            '</div>' +
            '<div class="d-flex flex-row justify-content-between" id="listHandlingFooter">' +
                '<button type="button" name="button"' +
                  'class="btn btn-danger d-flex justify-content-center align-items-center"' +
                  'id="addToListButton"><i class="fas fa-plus"></i></button>' +
            '</div>'+
            '</div></div>';

            $('#todoListsPart').append(newListWrapper);

            var carouselListItem = '<li>' + newListWrapper + '</li>';
            $('#sliderCarouselList').append(carouselListItem);

            $('#addnewListFeild').toggleClass('beShownOrNot');
            $('#addNewListButtonTitle').toggleClass('beShownOrNot');
          }
        );

        $(document).on('click', '#editTaskText', 
        function(){
          $(this).parent().siblings('#editCurrentItemField').toggleClass('beShownOrNot');
        });

        $(document).on('click', '#editTaskButton', 
        function(){
            var toAdd = $(this).siblings('#editedName').val();
            var deadLine = $(this).siblings('#editedDate').val();
            $(this).parent().siblings('#nameAndTimeWrapper').find('#taskTitle').text(toAdd);
            $(this).parent().siblings('#nameAndTimeWrapper').find('#deadLineTime').text(deadLine);
            $(this).parent().addClass('beShownOrNot');
        });

      //  $("input[name=ListItem]").keyup(function(event){
      //     if(event.keyCode == 13){
      //       $("#button").click();
      //     }
      // });

      // $(document).on('dblclick','li', function(){
      //   $(this).toggleClass('strike').fadeOut('slow');
      // });

      // $('input').focus(function() {
      //   $(this).val('');
      // });

      // $('ol').sortable();

     
    }
);
