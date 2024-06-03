<script>
export default {
    name: 'AppHeader',
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<template>
    <header>
        <h1>My Portfolio</h1>
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
            <router-link :to="{ name: 'blog' }">Blog</router-link>
            <router-link :to="{ name: 'contacts' }">Contacts</router-link>
        </nav>
    </header>
</template>