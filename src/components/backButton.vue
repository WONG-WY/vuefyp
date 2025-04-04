<template>
    <div class="backButton">
        <button @click="handleBack" class="back-btn" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'backButton',
    methods: {
        handleBack() {
            this.$router?.push('/')
        }

        // if (window.history.length > 1) {
        //     this.$router ? this.$router.go(-1) : window.history.back()
        // } else {
        //     this.$router?.push('/') || (window.location.href = '/')
        // }
    }
}
</script>

<style scoped>
.back-btn {
    position: fixed;
    top: 25px;
    left: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 1000;
}

.back-btn:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
}

.back-btn svg {
    color: #333;
    margin-right: 2px;
}

/* Mobile optimization */
@media (max-width: 768px) {
    .back-btn {
        top: 1rem;
        left: 1rem;
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>