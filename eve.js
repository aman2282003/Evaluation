function Student(name, roll_no, class_, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = class_;
    this.section = section;
    this.marks = marks;

    this.printTop3Subjects = function () {
        let subjects = [];
        for (let subject in this.marks) {
            subjects.push({ name: subject, marks: this.marks[subject] });
        }

        console.log("Top 3 Subjects based on marks:");
        for (let i = 0; i < 3 && i < subjects.length; i++) {
            let max = 0;
            for (let j = 1; j < subjects.length - i; j++) {
                if (subjects[j].marks > subjects[max].marks) {
                    max = j;
                }
            }
            console.log(`${i + 1}. ${subjects[max].name} - ${subjects[max].marks}`);
            if (max !== subjects.length - 1 - i) {
                [subjects[max], subjects[subjects.length - 1 - i]] = [subjects[subjects.length - 1 - i], subjects[max]];
            }
        }
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.class}       |`);
        console.log(`| Section  - ${this.section}       |`);

        let totalMarks = 0;
        let totalSubjects = 0;
        for (let subject in this.marks) {
            console.log(`| ${subject}  - ${this.marks[subject]}      |`);
            totalMarks += this.marks[subject];
            totalSubjects++;
        }

        let percentage = (totalMarks / (totalSubjects * 100)) * 100;
        percentage = Math.floor(percentage * 10) / 10; 
        console.log(`| Percentage- ${percentage} % |`);
        console.log("+--------------------+");
    };
}

let student = new Student(
    "Huzaifa",
    16,
    "X",
    "A",
    {
        science: 72,
        maths: 75,
        socials: 79,
        english: 80,
        hindi: 67
    }
);

student.printTop3Subjects();
student.printReportCard();
