class Person {
    // Private Fields
    #name;
    #age;
    #occupation;
    #hobby;
    #motto;

    constructor(name, age, occupation, hobby, motto) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#hobby = hobby;
        this.#motto = motto;
    }

    // Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get occupation() {
        return this.#occupation;
    }

    get hobby() {
        return this.#hobby;
    }

    get motto() {
        return this.#motto;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Hobby: " + this.hobby);
        console.log("Motto: " + this.motto);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}<br>
            <strong>Hobby:</strong> ${this.hobby}<br>
            <strong>Motto:</strong> ${this.motto}<br>
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, hobby, motto, major) {
        super(name, age, occupation, hobby, motto);
        this.major = major;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
}

// Creating an instance of the Student class
const studentOne = new Student('Adrian M. Villarosa', 20, 'student', 'drawing, editing, and watching movies', 'I’m letting my life hit me until it gets tired. Then I’ll hit back. ', 'Information Technology');

// Calling methods
studentOne.displayInfo();
studentOne.displayInfoHTML();
