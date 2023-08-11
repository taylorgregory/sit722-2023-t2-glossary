var express = require('express');
var router = express.Router();

const headerObject = {
  idHeader: 'ID', 
  termHeader: 'Term',
  descriptionHeader: 'Description',
  referencesHeader: 'References'
}

const termsList = [
  {
    id: 1,
    term: 'DevOps',
    description: 'DevOps (a combination of the terms \'development\' and \'operations\') is concerned with bringing together the work of software development and IT operations teams - largely through automation. The DevOps lifecycle is also known as the continuous delivery pipeline, and it is a series of workflows that enable rapid delivery of high-quality software.',
    reference: 'What is devops?. IBM. (n.d.). https://www.ibm.com/topics/devops'
  },
  {
    id: 2,
    term: 'Wall of Confusion',
    description: 'The \'Wall of Confusion\' is a concept in DevOps referring to when one person/group views their job as complete after they hand it over to the next person/group in the process. Ultimately, this behaviour results in difficulty in software deployment, significant delays, and risk of defects.',
    reference: 'Kawaguchi, S. (2022, February 12). The Wall of Confusion. Medium. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26'
  },
  {
    id: 3,
    term: 'Cloud Computing',
    description: 'Unlike more \'traditional\' computing, cloud computing delivers services over the internet. This might include databases, networking, analytics, and servers. This offers a number of benefits including security, efficiency, and lower operating costs.',
    reference: 'What is cloud computing?: Microsoft Azure. What Is Cloud Computing? | Microsoft Azure. (n.d.). https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-cloud-computing'
  },
  {
    id: 4,
    term: 'Microservices',
    description: 'A microservice is a software development approach consisting of small, independent services rather than tightly coupled processes (as is the case in monolithic architectures). With microservices, it becomes much faster and easier to build and scale applications due to its agility, flexible scaling, and easy deployment.',
    reference: 'Larsson, M. (2014). Microservices. Amazon. https://aws.amazon.com/microservices/'
  },
  {
    id: 5,
    term: 'Waterfall Methodology',
    description: 'The Waterfall methodology is a project management approach similar to a waterfall. That is, the output of a task is the input for the next task in a fairly linear fashion. This methodology has frequently been used in IT projects and commonly consists of steps pertaining to gathering requirements, design, implementation, testing, and deployment.',
    reference: 'Waterfall methodology: Project management | Adobe Workfront. (n.d.). https://business.adobe.com/blog/basics/waterfall'
  },
  {
    id: 6,
    term: 'Agile Methodology',
    description: 'Unlike the Waterfall methodology, the Agile methodology is a project management approach that breaks the project into smaller phases. With this, there is an emphasis on continual improvement based on feedback from previous phases. Agile is effective in quickly responding to changes or feedback, rather than having to go back to the beginning of the process.',
    reference: 'Atlassian. (n.d.-a). What is agile?. Atlassian. https://www.atlassian.com/agile'
  },
  {
    id: 7,
    term: 'Version Control',
    description: 'Version control is the act of tracking changes in software source code (or in files more broadly). It allows development teams to see previous versions of code and revert changes if needed. It also allows teams to work concurrently on different areas of the same codebase using branches. There have been several version control systems to enable this way of working - the most common today being Git.',
    reference: 'Atlassian. (n.d.). What is version control: Atlassian Git Tutorial. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control'
  },
  {
    id: 8,
    term: 'Enterprise System',
    description: 'An enterprise system is software used by an organisation to assist them in managing their internal and external processes. It can also allow them to integrate business processes and replace multiple independent systems.',
    reference: 'Billie Nordmeyer MBA, M. (2019, January 25). Three different types of Enterprise Systems. Small Business - Chron.com. https://smallbusiness.chron.com/three-different-types-enterprise-systems-73267.html'
  },
  {
    id: 9,
    term: 'Continuous Delivery',
    description: 'Continous delivery is used in software development to automatically prepare code for releases to a production environment. Benefits of continuous delivery include improving developer productivity, quicker delivery of updates, and automated software release processes.',
    reference: 'Freeman, E. (2019). DevOps. Amazon. https://aws.amazon.com/devops/continuous-delivery/'
  },
  {
    id: 10,
    term: 'Software Deployment',
    description: 'Software deployment refers to the steps and processes that are followed to ensure software is available to users. Common software deployment activities include installation, testing, software release, and performance monitoring.',
    reference: 'Software deployment - definition &amp; overview. Sumo Logic. (n.d.). https://www.sumologic.com/glossary/software-deployment/'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary - Taylor Gregory', 
    subtitle: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions.',
    headers: headerObject,
    terms: termsList
  });
});

module.exports = router;
