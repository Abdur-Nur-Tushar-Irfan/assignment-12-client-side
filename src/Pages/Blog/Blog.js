import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse m-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer: In order to implement state in our components, React provides us with a hook called useState. Let's see how it works with the following example.

                        We'll use the classic counter example, in which we're displaying a number and we have several buttons to increase, decrease, or reset that number.

                        This is a good example of an app where we need to store a piece of information and render something different every time that information changes.</p>
                </div>
            </div>
            <div className="collapse m-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div className="collapse m-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer:The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div> <div className="collapse m-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer: React
                        React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.

                        Vue
                        Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It’s a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.

                        Angular
                        Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube. It’s often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith‘s data.

                        It’s the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;