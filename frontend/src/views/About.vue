<template>
<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
    <div class="container mx-auto px-4">
    <!-- Header Section -->
    <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Chouaib Skitou</h1>
        <h2 class="text-2xl text-purple-400 mb-4">Software Engineer</h2>
        <div class="flex justify-center space-x-4 text-gray-300">
        <a href="tel:+33636022183" class="hover:text-purple-400 transition-colors">+33 (0)6 36 0- 2- 8-</a>
        <a href="mailto:chouaib.skt@gmail.com" class="hover:text-purple-400 transition-colors">chouaib.skt@gmail.com</a>
        <a href="https://github.com/chouaib-skitou" target="_blank" class="hover:text-purple-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/chouaib-skitou/" target="_blank" class="hover:text-purple-400 transition-colors">LinkedIn</a>
        </div>
    </div>

    <!-- Professional Summary -->
    <div class="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4 text-purple-400">Professional Summary</h2>
        <p class="text-gray-300">
        A passionate developer deeply enamored with computing and driven by unwavering motivation. I bring strong interpersonal skills that promote teamwork and collaboration. I am actively seeking a permanent CDI contract as a software engineer.
        </p>
    </div>

    <!-- Two Column Layout -->
    <div class="grid md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-8">
        <!-- Experience -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Experience</h2>
            <div class="space-y-6">
            <div>
                <h3 class="text-xl font-medium">Trainee Software Engineer</h3>
                <p class="text-gray-400">CFG Group | Sep 2022 - Present | Paris, France</p>
                <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Led code review sessions to maintain code quality and improve team development</li>
                <li>Developed and deployed a rental management platform</li>
                <li>Implemented CI/CD pipelines for reliable updates</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-medium">Web Developer Intern</h3>
                <p class="text-gray-400">Digital Speak Group | Mar 2021 - Jul 2021 | Marrakech, Morocco</p>
                <ul class="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Managed IT infrastructure and security</li>
                <li>Developed e-commerce website using JAVA</li>
                <li>Optimized web applications for performance</li>
                </ul>
            </div>
            </div>
        </div>

        <!-- Projects -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Projects</h2>
            <div class="space-y-4">
            <div>
                <h3 class="text-xl font-medium">Chat Application</h3>
                <p class="text-gray-400">MERN Stack: Express.js, Node.js, MongoDB (2023)</p>
            </div>
            <div>
                <h3 class="text-xl font-medium">Motus Game</h3>
                <p class="text-gray-400">C, C++ (2022)</p>
            </div>
            <div>
                <h3 class="text-xl font-medium">E-commerce Website</h3>
                <p class="text-gray-400">Laravel, Angular, MySQL (2021)</p>
            </div>
            </div>
        </div>
        <!-- Hobbies -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Hobbies & Interests</h2>
            <div class="flex flex-wrap gap-2">
                <span class="bg-purple-600 px-3 py-1 rounded-full text-sm">Travel</span>
                <span class="bg-purple-600 px-3 py-1 rounded-full text-sm">Hiking</span>
                <span class="bg-purple-600 px-3 py-1 rounded-full text-sm">Reading</span>
                <span class="bg-purple-600 px-3 py-1 rounded-full text-sm">Learning Languages</span>
            </div>
        </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
        <!-- Education -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Education</h2>
            <div class="space-y-4">
            <div>
                <h3 class="text-xl font-medium">Polytech Paris-Saclay</h3>
                <p class="text-gray-400">Professional Engineering diploma, Computer Science</p>
                <p class="text-gray-300">2022 - 2025 | Orsay (South Paris), France</p>
            </div>
            <div>
                <h3 class="text-xl font-medium">Engineering School of the Opal Coast</h3>
                <p class="text-gray-400">Bachelor degree in Computer Science</p>
                <p class="text-gray-300">2021 - 2022 | Calais, France</p>
            </div>
            <div>
                <h3 class="text-xl font-medium">Ecole Normale Superieure of Marrakech</h3>
                <p class="text-gray-400">2 Year technical diploma majoring Computer Science</p>
                <p class="text-gray-300">2019 - 2021 | Marrakech, Morocco</p>
            </div>
            </div>
        </div>

        <!-- Skills -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Coding Skills</h2>
            <div class="space-y-4">
            <div>
                <h3 class="text-lg font-medium text-gray-300">Web Development</h3>
                <p class="text-gray-400">Symfony, JavaScript, VueJS, Angular, NodeJS, TypeScript, Spring Boot</p>
            </div>
            <div>
                <h3 class="text-lg font-medium text-gray-300">Environment</h3>
                <p class="text-gray-400">Bitbucket, Jira, Git, GitLab, Heroku, Docker, CI/CD/Circle CI</p>
            </div>
            <div>
                <h3 class="text-lg font-medium text-gray-300">Database</h3>
                <p class="text-gray-400">SQL, PL/SQL/MySQL, MongoDB, Oracle, UML</p>
            </div>
            </div>
        </div>

        <!-- Languages -->
        <div class="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400">Languages</h2>
            <div class="grid grid-cols-2 gap-4">
            <div>
                <p class="font-medium">English</p>
                <p class="text-gray-400">C1 - Proficient User</p>
            </div>
            <div>
                <p class="font-medium">French</p>
                <p class="text-gray-400">C2 - Proficient User</p>
            </div>
            <div>
                <p class="font-medium">Arabic</p>
                <p class="text-gray-400">Native language</p>
            </div>
            <div>
                <p class="font-medium">Amazigh</p>
                <p class="text-gray-400">Native language</p>
            </div>
            </div>
        </div>

        
        </div>
    </div>
    </div>
</div>
</template>