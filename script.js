document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popup-overlay');
    const myPopup = document.getElementById('myPopup');
    const closePopupBtn = document.getElementById('closePopup');

    let activeElementId = null; // Variable to store the ID of the clicked element

    // Function to open the popup
    function openPopup(elementId) {
        activeElementId = elementId; // Set the variable to the element ID
        popupOverlay.style.display = 'block';
        myPopup.style.display = 'block';
		myPopup.style.backgroundImage = elementId;
        console.log("Active element ID:", activeElementId); // For demonstration
    }

    // Function to close the popup
    function closePopup() {
        popupOverlay.style.display = 'none';
        myPopup.style.display = 'none';
        activeElementId = null; // Reset the variable
    }

    // Event listeners for opening the popup
    document.getElementById('feature-collection-a').addEventListener('click', function() {
        openPopup('url(/Materials/SCRATCH_WORK_LD_CC_9.21.25.png)');
    });

	document.getElementById('feature-collection-b').addEventListener('click', function() {
        openPopup('url(Materials/Empty_Folds_LD_CC_6.12.25.png)');
    });
	
	document.getElementById('b1').addEventListener('click', function() {
        openPopup('url(/Materials/SCRATCH_WORK_LD_CC_9.21.25.png)');
    });

    document.getElementById('b2').addEventListener('click', function() {
        openPopup('url(Materials/Empty_Folds_LD_CC_6.12.25.png)');
    });

	document.getElementById('b3').addEventListener('click', function() {
        openPopup('url(Materials/Last_Date_2pc_Sticker_Set_LD_02.07.25.png)');
    });

    document.getElementById('b4').addEventListener('click', function() {
        openPopup('url(Materials/On_The_Tip_of_My_Finger_LD_SKR_4.12.24.png)');
    });

    // Event listener for closing the popup
    closePopupBtn.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup); // Close when clicking outside
});