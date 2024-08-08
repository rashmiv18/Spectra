import * as faceapi from 'face-api.js';

// face-api.js is a JavaScript library that provides face detection, face recognition, and facial landmark detection capabilities in the browser using TensorFlow.js. 
//It enables developers to work with facial data directly in the browser without the need for server-side processing. 
//The library is built on top of TensorFlow.js, which is a JavaScript library for training and deploying machine learning models in the browser and on Node.js.
// Key features of face-api.js include:
// Face Detection: Detects faces within an image or video stream, providing bounding box coordinates around each detected face.
// Face Landmark Detection: Identifies facial landmarks such as eyes, nose, mouth, etc., within a detected face.
// Face Recognition: Recognizes faces by comparing them to known faces or identities. It can be used to create face recognition systems.
// Age, Gender, and Emotion Detection: Provides capabilities to estimate the age, gender, and emotion of a detected face.
// Browser-Based: The library is designed to work in web browsers, making it suitable for web applications and projects that require facial analysis without server-side processing.

export const loadModels = () => {
  const MODEL_URL = `${process.env.PUBLIC_URL}/models`;

  return Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
  ]);
};

export const detectFaces = async (image) => {
  if (!image) {
    return;
  }

  const imgSize = image.getBoundingClientRect();
  // After this line of code is executed, imgSize will contain an object with properties such as width, height, top, bottom, left, and right. These properties describe the position and dimensions of the bounding box around the image element.
  const displaySize = { width: imgSize.width, height: imgSize.height };
  if (displaySize.height === 0) {
    return;
  }

  const faces = await faceapi
    .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions({ inputSize: 320 }))
    .withFaceLandmarks()
    .withFaceExpressions()
    .withAgeAndGender();

  return faceapi.resizeResults(faces, displaySize);
};

export const drawResults = async (image, canvas, results, type) => {
  if (image && canvas && results) {
    const imgSize = image.getBoundingClientRect();
    const displaySize = { width: imgSize.width, height: imgSize.height };
    faceapi.matchDimensions(canvas, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(results, displaySize);

    switch (type) {
      case 'landmarks':
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        break;
      case 'expressions':
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        break;
      case 'box':
        faceapi.draw.drawDetections(canvas, resizedDetections);
        break;
      case 'boxLandmarks':
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        break;
      default:
        break;
    }
  }
};
