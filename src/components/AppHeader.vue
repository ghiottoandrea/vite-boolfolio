<script>

export default {
    name: 'AppHeader',
}
</script>

<template>

    <nav class="d-flex navbar border-bottom align-items-center justify-content-between">

        <div class="nav-brand display-4 border-light border">
            <RouterLink class="text-decoration-none" :to="{ name: 'home' }">My Portfolio</RouterLink>
        </div>

        <ul class="list-unstyled d-flex gap-4 pt-3">

            <li class="nav-item">
                <RouterLink class=" nav-link" :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class=" nav-link" :to="{ name: 'projects' }">Projects</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class=" nav-link" :to="{ name: 'about' }">About</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class=" nav-link" :to="{ name: 'contacts' }">Contacts</RouterLink>
            </li>

        </ul>
    </nav>

</template>

<style></style>