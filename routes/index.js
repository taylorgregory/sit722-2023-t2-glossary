var express = require('express');
var router = express.Router();

const headerObject = {
  idHeader: 'ID', 
  termHeader: 'Term',
  descriptionHeader: 'Description',
  referencesHeader: 'References'
}
// NOTE: Referencing style = APA7
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
  {
    id: 11,
    term: 'Operating System',
    description: 'An operating system is a program that manages all other applications on a computer. Without an operating system, every application would require its own handling of low-level functionality such as disk storage and network interfaces etc. Users can interact with the operating system via a user interface (e.g. command line interface or graphical interface).',
    reference: 'Bigelow, S. J. (2023, April 27). What is an operating system (OS)? definition, types and examples. WhatIs.com. https://www.techtarget.com/whatis/definition/operating-system-OS#:~:text=An%20operating%20system%20(OS)%20is,application%20program%20interface%20(API)'
  },
  {
    id: 12,
    term: 'Technical Debt',
    description: 'Technical debt is a common side effect of software engineering and IT practices more broadly. It refers to the work that accrues over time by taking shortcuts or using workarounds to meet delivery deadlines. This debt can eventually result in unstable software and significantly higher support costs.',
    reference: 'Definition of technical debt - gartner information technology glossary. Gartner. (n.d.). https://www.gartner.com/en/information-technology/glossary/technical-debt '
  },
  {
    id: 13,
    term: 'Infrastructure as Code',
    description: 'Infrastructure as Code allows for infrastructure to be provisioned and managed using code rather than using manual processes. Through configuration files and version control, it is much easier to provision the same environment every time.',
    reference: 'What is infrastructure as code (IAC)?. Red Hat - We make open source technologies for the enterprise. (n.d.). https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac'
  },
  {
    id: 14,
    term: 'Behaviour Driven Development (BDD)',
    description: 'Behaviour Driven Development is a software development approach that tries to close the gap between business and developers. This is achieved by ensuring shared understanding of the problem - and using this from concept through to implementation.',
    reference: 'Behaviour-driven development. Behaviour-Driven Development - Cucumber Documentation. (n.d.). https://cucumber.io/docs/bdd/'
  },
  {
    id: 15,
    term: 'Test Driven Development (TDD)',
    description: 'Test Driven Development is a software development approach that focuses on writing unit tests before the corresponding code is written. This helps developers better understand requirements, improves test coverage, and encourages a more flexible codebase.',
    reference: 'What is Test Driven Development (TDD)?. BrowserStack. (2023, June 22). https://www.browserstack.com/guide/what-is-test-driven-development'
  },
  {
    id: 16,
    term: 'Container',
    description: 'A container is type of operating system virtualisation. It contains the imporant executables required for an application including configuration files, libraries and other system tools. Containers help to mitigate problems encountered when moving applications from one environment to another.',
    reference: 'What are containers in devops? benefits, use cases. KnowledgeHut. (n.d.). https://www.knowledgehut.com/blog/devops/devops-containers'
  },
  {
    id: 17,
    term: 'Virtual Machine',
    description: 'A virtual machine is an alternative to a physical computer, and it is used to run programs and deploy applications. They run their own operating systems - essentially behaving like a separate computer within an application window. Virtual machines can also be used to provide integrated disaster recovery and options for application provisioning.',
    reference: 'What is a virtual machine?: Vmware glossary. VMware. (2022, August 4). https://www.vmware.com/au/topics/glossary/content/virtual-machine.html'
  },
  {
    id: 18,
    term: 'Container Image',
    description: 'A container image is an unchangeable, static file that is used to create a container on an operating system. It contains everything that the container needs to run - such as system libraries, configuration settings and specific workloads that should run. Container images are a core component of containerised architecture.',
    reference: 'Container images: Architecture and best practices. Aqua. (2022, December 7). https://www.aquasec.com/cloud-native-academy/container-security/container-images/#:~:text=A%20container%20image%20is%20a,component%20of%20a%20containerized%20architecture'
  },
  {
    id: 19,
    term: 'Docker',
    description: 'Docker is a platform that enables separation between applications and infrastructure. Docker allows for consistent application delivery, responsive deployment, and the ability to run more workloads on the same hardware.',
    reference: 'Docker Overview. Docker Documentation. (2023, August 22). https://docs.docker.com/get-started/overview/'
  },
  {
    id: 20,
    term: 'Kubernetes',
    description: 'Kubernetes is an open-source system used for grouping containers into logical units. It allows for automated deployment, scaling, and management of containerised applications. Benefits of Kubernetes include automated rollouts and rollbacks, storage orchestration, and secret and configuration management.',
    reference: 'Production-grade container orchestration. Kubernetes. (n.d.). https://kubernetes.io/'
  }
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
