<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: []
        }
    },
    methods: {

        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.projects);
                    this.projects = response.data.projects;
                })
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url;
        this.callApi(url);
    }
}
</script>

<template>

    <div>
        <h1>Projects</h1>
        <ul>
            <li v-for="project in projects.data" :key="project.id">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <p>Start date: {{ project.project_start_date }}</p>
                <p>End date: {{ project.project_end_date }}</p>
            </li>
        </ul>
    </div>

</template>

<style></style>
