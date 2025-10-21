# Dynamic Profile Card Component

An extended version of the Stage 0 project, built with **HTML5**, **CSS3**, and **Vanilla JavaScript**.  
This stage evolves the single profile card into a **multi-page application**, introducing:

- An **About Me** page  
- A **Contact Me** page (with form validation and success confirmation)  
- Improved responsiveness and accessibility throughout

---

## Live Demo

🔗 **Live URL:** [https://isaacayomi.github.io/HNG-STAGE-1/](https://isaacayomi.github.io/HNG-STAGE-1/)  
🔗 **GitHub Repo:** [https://github.com/Isaacayomi/HNG-STAGE-1](https://github.com/Isaacayomi/HNG-STAGE-1)

---

## Installation

Follow these simple steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Isaacayomi/HNG-STAGE-1.git
```

### 2. Navigate to the Project Directory

```bash
cd HNG-STAGE-1
```

### 3. Open in Browser

No build process or dev server is required. Simply open the `index.html` file in your browser:

```bash
# For macOS/Linux
open index.html

# For Windows
start index.html
```

---

## Features

### Core Functionality

- **Dynamic Time Display**  
  Continuously updates the current timestamp using JavaScript’s `Date.now()` function.

- **Personalized Profile Card**  
  Displays name, avatar, bio, hobbies, and dislikes in a clean and visually balanced layout.

- **Social Media Integration**  
  Links to major social platforms (GitHub, LinkedIn, Twitter) with accessible icons.

- **Modern & Responsive Design**  
  Clean, flexible CSS design that adapts gracefully across different screen sizes.

- **Accessibility-Focused Markup**  
  Uses semantic HTML5 elements, descriptive `alt` attributes, and relevant ARIA attributes.

- **Enhanced Testability**  
  Includes `data-testid` attributes on interactive elements for automated testing.

---

## Additional Pages

### About Me Page (`about.html`)

A dedicated section describing:
- The developer’s **background and motivation**  
- **Goals** within the internship program  
- **Areas of focus** for personal and professional improvement  
- A **note to future self**, emphasizing growth, persistence, and self-belief  
- **Extra thoughts** on community, learning, and giving back  

Built using semantic sections, each with unique `data-testid` attributes for easy testing and validation.

---

### Contact Me Page (`contact.html`)

An interactive form built with:
- Input fields for **Full Name**, **Email Address**, **Subject**, and **Message**  
- **Client-side validation** for empty fields and email format  
- Clear **error messages** displayed dynamically for invalid entries  
- A **success confirmation message** that appears upon successful form submission  
- Accessible attributes like `aria-describedby` and `aria-label` for improved screen reader support  

Includes a clean layout, subtle feedback animations, and responsive design adjustments for smaller screens.

---

## Key Learnings

- Structuring a **multi-page static project** efficiently  
- Implementing **form validation logic** using Vanilla JavaScript  
- Applying **accessibility best practices** with ARIA and semantic HTML  
- Enhancing test reliability with consistent `data-testid` usage  
- Building a **scalable CSS architecture** for maintainability  

---

## Tech Stack

- **HTML5**
- **CSS3 (Flexbox & Grid)**
- **Vanilla JavaScript (ES6+)**
