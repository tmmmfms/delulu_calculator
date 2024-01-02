document.addEventListener('DOMContentLoaded', function () {
    // First Slider
    var slider1 = document.getElementById('slider1');
    var sliderValue1 = document.getElementById('sliderValue1');

    // Second Slider
    var slider2 = document.getElementById('slider2');
    var sliderValue2 = document.getElementById('sliderValue2');

    // Second Slider
    var slider3 = document.getElementById('slider3');
    var sliderValue3 = document.getElementById('sliderValue3');

    // Second Slider
    var slider4 = document.getElementById('slider4');
    var sliderValue4 = document.getElementById('sliderValue4');

    // Multiplication Result
    var multiplicationResult = document.getElementById('multiplicationResult');
    var resultValue = document.getElementById('resultValue');
    var resultVolumeValue = document.getElementById('resultVolumeValue');

    var displayResultButton = document.getElementById('displayResultButton');

    var resetSlidersButton = document.getElementById('resetSlidersButton');

    // Random numbers arrays for each slider
    var randomNumbers1 = [
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74, 75, 76, 77

    ];

    var randomNumbers2 = [
        0.0154, 0.0158, 0.0161, 0.0168, 0.0166, 0.0166, 0.0180, 0.0183, 0.0182, 0.0182,
        0.0181, 0.0181, 0.0179, 0.0174, 0.0170, 0.0166, 0.0167, 0.0170, 0.0167, 0.0167,
        0.0163, 0.0160, 0.0155, 0.0150, 0.0144, 0.0139, 0.0135, 0.0131, 0.0127, 0.0122,
        0.0118, 0.0115, 0.0112, 0.0109, 0.0107, 0.0104, 0.0102, 0.0100, 0.0097, 0.0095,
        0.0093, 0.0090, 0.0088, 0.0085, 0.0082, 0.0079, 0.0075, 0.0071, 0.0067, 0.0064,
        0.0060, 0.0056, 0.0053, 0.0049, 0.0044, 0.0041, 0.0037, 0.0033, 0.0030, 0.0027
    ];

    var randomNumbers3 = [
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74, 75, 76, 77
    ];

    var randomNumbers4 = [
        0.0154, 0.0158, 0.0161, 0.0168, 0.0166, 0.0166, 0.0180, 0.0183, 0.0182, 0.0182,
        0.0181, 0.0181, 0.0179, 0.0174, 0.0170, 0.0166, 0.0167, 0.0170, 0.0167, 0.0167,
        0.0163, 0.0160, 0.0155, 0.0150, 0.0144, 0.0139, 0.0135, 0.0131, 0.0127, 0.0122,
        0.0118, 0.0115, 0.0112, 0.0109, 0.0107, 0.0104, 0.0102, 0.0100, 0.0097, 0.0095,
        0.0093, 0.0090, 0.0088, 0.0085, 0.0082, 0.0079, 0.0075, 0.0071, 0.0067, 0.0064,
        0.0060, 0.0056, 0.0053, 0.0049, 0.0044, 0.0041, 0.0037, 0.0033, 0.0030, 0.0027
    ];

    var randomNumbers5 = [
        "RM2,000",
        "RM3,000",
        "RM4,000",
        "RM5,000",
        "RM6,000",
        "RM10,000",
        "RM12,000",
        ">RM180,000"
        //https://www.mef.org.my/news/general_article.aspx?@ID=59
    ];

    var randomNumbers6 = [
        0.927,
        0.80,
        0.663,
        0.543,
        0.444,
        0.197,
        0.129,
        0.073

        // Add more random numbers as needed
    ];

    var randomNumbers7 = [
        "Malay",
        "Chinese",
        "Indian",
        "Others"
        // Add more random numbers as needed
    ];

    var randomNumbers8 = [
        0.578,
        0.227,
        0.066,
        0.129
        //https://v1.dosm.gov.my/v1/index.php?r=column/cthemeByCat&cat=430&bul_id=VndFcmkvVTZoVTNYOTN2MzRtNy9zQT09&menu_id=L0pheU43NWJwRWVSZklWdzQ4TlhUUT09
    ];

    // Initial values
    var index1 = Math.round(slider1.value * (randomNumbers1.length - 1));
    var index2 = Math.round(slider2.value * (randomNumbers3.length - 1));
    var index3 = Math.round(slider3.value * (randomNumbers5.length - 1));
    var index4 = Math.round(slider4.value * (randomNumbers7.length - 1));

    var result = 0;
    var result2 = 0;

    // Display initial values
    updateSliderValue(slider1, sliderValue1, randomNumbers1, randomNumbers2);
    updateSliderValue(slider2, sliderValue2, randomNumbers3, randomNumbers4);
    updateSliderValue(slider3, sliderValue3, randomNumbers5, randomNumbers6);
    updateSliderValue(slider4, sliderValue4, randomNumbers7, randomNumbers8);


    displayMultiplicationResult(result);
    displayMultiplicationResultWithDelay(result);

    slider1.addEventListener('input', function () {
        index1 = Math.round(slider1.value * (randomNumbers1.length - 1));
        updateSliderValue(slider1, sliderValue1, randomNumbers1, randomNumbers2);

        // Display current values
        displayCurrentValues();
    });

    slider2.addEventListener('input', function () {
        index2 = Math.round(slider2.value * (randomNumbers3.length - 1));
        updateSliderValue(slider2, sliderValue2, randomNumbers3, randomNumbers4);

        // Display current values
        displayCurrentValues();
    });

    slider3.addEventListener('input', function () {
        index3 = Math.round(slider3.value * (randomNumbers5.length - 1));
        updateSliderValue(slider3, sliderValue3, randomNumbers5, randomNumbers6);
        displayCurrentValues();

    });

    slider4.addEventListener('input', function () {
        index4 = Math.round(slider4.value * (randomNumbers7.length - 1));
        updateSliderValue(slider4, sliderValue4, randomNumbers7, randomNumbers8);
        displayCurrentValues();

    });

    function updateSliderValue(slider, sliderValue, numbersSet1, numbersSet2) {
        // Calculate the index based on the percentage of the slider value
        var index = Math.round(slider.value * (numbersSet1.length - 1));

        // Display both sets of random numbers for the corresponding slider
        sliderValue.textContent = numbersSet1[index] + " | " + numbersSet2[index];

        // If Slider 1 is greater than Slider 2, adjust Slider 2
        if (slider === slider1 && parseFloat(slider1.value) >= parseFloat(slider2.value)) {
            slider2.value = parseFloat(slider1.value) + 0.02;
            index2 = Math.round(slider2.value * (randomNumbers3.length - 1));
            updateSliderValue(slider2, sliderValue2, randomNumbers3, randomNumbers4);
        }

        // If Slider 2 is less than Slider 1, adjust Slider 1
        if (slider === slider2 && parseFloat(slider2.value) <= parseFloat(slider1.value)) {
            slider1.value = parseFloat(slider2.value) - 0.02;
            index1 = Math.round(slider1.value * (randomNumbers1.length - 1));
            updateSliderValue(slider1, sliderValue1, randomNumbers1, randomNumbers2);
        }

        result2 = 0;

        // Recalculate the result based on the updated values
        for (i = index1; i < index2; i++) {
            result2 = result2 + randomNumbers2[i]
        }
        result = result2 * randomNumbers6[index3] * randomNumbers8[index4] * 100 / 2 * 0.02;
    }

    displayResultButton.addEventListener('click', function () {
        displayMultiplicationResultWithDelay(result);
    });

    function displayCurrentValues() {
        // Update the display with current values
        document.getElementById('displaySlider1Value').textContent = slider1.value;
        document.getElementById('displaySlider2Value').textContent = slider2.value;
        document.getElementById('displaySlider3Value').textContent = slider3.value;
        document.getElementById('displaySlider4Value').textContent = slider4.value;
    }

    function displayMultiplicationResult(result) {
        // Update the multiplication result on the webpage
        resultValue.textContent = result.toFixed(4);
        resultVolumeValue.textContent = (result * 34220000).toFixed(0);
    }

    function displayMultiplicationResultWithDelay(result) {
        // Introduce a delay of 1000 milliseconds (1 second) before updating the result
        setTimeout(function () {
            displayMultiplicationResult(result);
        }, 1000);
    }

    resetSlidersButton.addEventListener('click', function () {
        // Reset the sliders to their original positions
        slider1.value = 0;
        slider2.value = 0;
        slider3.value = 0;
        slider4.value = 0;

        // Update the slider values display
        updateSliderValue(slider1, sliderValue1, randomNumbers1, randomNumbers2);
        updateSliderValue(slider2, sliderValue2, randomNumbers3, randomNumbers4);
        updateSliderValue(slider3, sliderValue3, randomNumbers5, randomNumbers6);
        updateSliderValue(slider4, sliderValue4, randomNumbers7, randomNumbers8);

        // Update the display with current values
        displayCurrentValues();
        displayMultiplicationResult(result);

    });
});
