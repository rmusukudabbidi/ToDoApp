# SimpleTodoApp

SimpleTodoApp is a task management application built using [**React Native**](https://reactnative.dev). This app allows users to add, edit, complete, and delete tasks with features such as animations for a more interactive experience and persistent task storage using `AsyncStorage`.

## Features

- **Add Tasks**: Quickly add new tasks to your to-do list.
- **Edit Tasks**: Modify tasks directly by entering edit mode.
- **Complete/Uncomplete Tasks**: Toggle tasks between active and completed states.
- **Delete Tasks**: Remove tasks with a smooth fade-out animation.
- **Persistent Storage**: Tasks are saved using `AsyncStorage` and retained even after the app is closed and reopened.
- **Animations**: Enhanced user experience with fade-in and fade-out animations for task interactions.

---

## Getting Started

> **Note**: Ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions before proceeding.

### Prerequisites

- **Node.js**: Install the latest version from [Node.js official website](https://nodejs.org/).
- **React Native CLI**: Install it globally using:
  ```bash
  npm install -g react-native-cli `

-   **Android/iOS Emulator**: Set up an Android or iOS simulator as per the [React Native guide](https://reactnative.dev/docs/environment-setup).

* * * * *

### Step 1: Clone the Repository

Clone the SimpleTodoApp repository from GitHub:

bash

Copy code

`git clone [YOUR_GITHUB_REPO_LINK]
cd SimpleTodoApp`

* * * * *

### Step 2: Install Dependencies

Install the required dependencies:

bash

Copy code

`npm install`

* * * * *

### Step 3: Start the Metro Server

Start the JavaScript bundler (Metro):

bash

Copy code

`npm start`

* * * * *

### Step 4: Run the App

In a new terminal window, run the following command to launch the app:

#### For Android:

bash

Copy code

`npm run android`

#### For iOS:

bash

Copy code

`npm run ios`

* * * * *

Modifying the App
-----------------

You can modify the app by editing `App.js` in your text editor. After making changes:

-   **For Android**: Press <kbd>R</kbd> twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows/Linux or <kbd>Cmd</kbd> + <kbd>M</kbd> on macOS).
-   **For iOS**: Press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator.

* * * * *

Demo
----

Here's a quick overview of the app's key features:

1.  **Adding Tasks**:

    -   Users can input a task in the text box and add it to the list by pressing the "+" button.
    -   New tasks fade in smoothly.
2.  **Editing Tasks**:

    -   Tap the "Edit" button to modify an existing task.
    -   After editing, save the changes by pressing the checkmark button (`✓`).
3.  **Task Completion**:

    -   Tap on a task to mark it as completed (strikethrough style applied).
    -   Tap again to revert it to an active task.
4.  **Deleting Tasks**:

    -   Delete a task by pressing the "X" button.
    -   The task fades out before being removed from the list.
5.  **Persistent Storage**:

    -   Tasks remain saved even after closing and reopening the app.

* * * * *

Troubleshooting
---------------

If you encounter issues running the app, refer to the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting). Common issues include:

-   **Metro Server Errors**: Ensure Metro Bundler is running in the terminal.
-   **Emulator Not Starting**: Verify that your Android/iOS emulator is properly configured and running.

* * * * *

Learn More
----------

To learn more about React Native, take a look at:

-   [React Native Website](https://reactnative.dev)
-   [Environment Setup](https://reactnative.dev/docs/environment-setup)
-   [Blog](https://reactnative.dev/blog)
-   [React Native GitHub](https://github.com/facebook/react-native)

* * * * *

Acknowledgments
---------------

-   This project utilized `AsyncStorage` for data persistence and `Animated` for task animations.
-   Special thanks to the React Native community for providing comprehensive documentation and support.

* * * * *

GitHub Repository
-----------------

The source code for **SimpleTodoApp** is available on GitHub: **[Project Repository Link](https://github.com/rmusukudabbidi/ToDoApp)**.
