<script lang="ts">
    import { enhance } from "$app/forms";
    import { i18n } from "$lib/i18n/i18n.svelte";

    let showModal = false;
    let isSuccess = false;

    function openModal() {
        showModal = true;
        isSuccess = false;
    }

    function closeModal() {
        showModal = false;
        setTimeout(() => {
            isSuccess = false;
        }, 300);
    }
</script>

<footer class="cta-footer">
    <div class="cta-content">
        <h3>{i18n.t.end.title || "No more data for now"}</h3>
        <p>
            {i18n.t.end.message ||
                "This visualization is constantly updated with new metrics."}
        </p>
        <button on:click={openModal} class="btn-collaborate">
            {i18n.t.end.linkText || "Contribute to the project"}
        </button>
    </div>
</footer>

{#if showModal}
    <div
        class="modal-backdrop"
        role="button"
        tabindex="0"
        on:click={closeModal}
        on:keydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                closeModal();
            }
        }}
    >
        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            on:click|stopPropagation
            on:keydown={(e) => {
                // Prevent closing modal with enter/space on modal content itself
                if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                }
            }}
        >
            <form
                method="POST"
                action="?/suggest"
                use:enhance={() => {
                    return async ({ result, update }) => {
                        if (result.type === "success") {
                            isSuccess = true;
                        }
                        update({ reset: true });
                    };
                }}
            >
                <div class="modal-header">
                    <h2>{i18n.t.end.modal?.title || "Suggest a new fact"}</h2>
                    <button
                        type="button"
                        class="close-btn"
                        on:click={closeModal}
                        aria-label="Close modal">×</button
                    >
                </div>

                {#if isSuccess}
                    <div class="success-message">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="success-icon"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h3>
                            {i18n.t.end.modal?.confirmation ||
                                "Thank you for your contribution!"}
                        </h3>
                        <p>
                            {i18n.t.end.modal?.closingMessage ||
                                "Your suggestion has been successfully saved and will be reviewed for future updates."}
                        </p>
                        <button
                            type="button"
                            class="btn-primary success-btn"
                            on:click={closeModal}
                        >
                            {i18n.t.end.modal?.close || "Close"}
                        </button>
                    </div>
                {:else}
                    <div class="suggest-form">
                        <div class="form-group">
                            <label for="question"
                                >{i18n.t.end.modal?.questionLabel || "Question"}</label
                            >
                            <input
                                type="text"
                                id="question"
                                name="question"
                                required
                                placeholder={i18n.t.end.modal?.questionPlaceholder}
                            />
                        </div>

                        <div class="form-group">
                            <label for="percentage"
                                >{i18n.t.end.modal?.percentageLabel ||
                                    "Percentage"}</label
                            >
                            <input
                                type="number"
                                id="percentage"
                                name="percentage"
                                min="1"
                                max="100"
                                required
                                placeholder={i18n.t.end.modal?.percentagePlaceholder}
                            />
                        </div>

                        <div class="form-group">
                            <label for="sourceUrl"
                                >{i18n.t.end.modal?.sourceLabel || "Source URL"}</label
                            >
                            <input
                                type="url"
                                id="sourceUrl"
                                name="sourceUrl"
                                placeholder={i18n.t.end.modal?.sourcePlaceholder}
                            />
                        </div>

                        <div class="modal-actions">
                            <p class="github-promo">
                                {i18n.t.end.modal?.githubPrompt ||
                                    "Want to help maintain the code? "}
                                <a
                                    href="https://github.com/datypical/theworldinpercentages.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {i18n.t.end.modal?.githubLink ||
                                        "Check out our GitHub"}
                                </a>
                            </p>
                            <div class="modal-buttons">
                                <button
                                    type="button"
                                    class="btn-secondary"
                                    on:click={closeModal}
                                >
                                    {i18n.t.end.modal?.cancel || "Cancel"}
                                </button>
                                <button type="submit" class="btn-primary">
                                    {i18n.t.end.modal?.submit || "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                {/if}
            </form>
        </div>
    </div>
{/if}

<style>
    .cta-footer {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .cta-content {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .cta-content h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--text-heading);
    }

    .cta-content p {
        font-size: 1.1rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
        line-height: 1.5;
    }

    .btn-collaborate {
        background-color: var(--text-heading);
        color: var(--bg-canvas);
        border: none;
        border-radius: var(--radius-pill);
        padding: 0.8rem 2rem;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            transform 0.2s ease,
            opacity 0.2s ease;
    }

    .btn-collaborate:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .modal-content {
        background-color: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-l);
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        animation: modalSlideIn 0.3s ease-out;
    }

    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-subtle);
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.25rem;
    }

    .close-btn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--text-muted);
        cursor: pointer;
        line-height: 1;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .close-btn:hover {
        color: var(--text-heading);
    }

    .suggest-form {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .form-group label {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-body);
    }

    .form-group input {
        background-color: transparent;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-s);
        padding: 0.75rem;
        color: var(--text-heading);
        font-family: var(--font-main);
        font-size: 1rem;
    }

    .form-group input:focus {
        outline: none;
        border-color: var(--text-heading);
    }

    .modal-actions {
        margin-top: 1rem;
        border-top: 1px solid var(--border-subtle);
        padding-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .github-promo {
        margin: 0;
        font-size: 0.85rem;
        color: var(--text-muted);
        text-align: center;
        line-height: 1.4;
    }

    .github-promo a {
        color: var(--text-body);
        font-weight: 500;
        text-decoration: none;
    }

    .github-promo a:hover {
        text-decoration: underline;
    }

    .modal-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .btn-secondary,
    .btn-primary {
        padding: 0.6rem 1.25rem;
        border-radius: var(--radius-pill);
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-secondary {
        background: transparent;
        border: 1px solid var(--border-subtle);
        color: var(--text-body);
    }

    .btn-secondary:hover {
        background: var(--border-subtle);
    }

    .btn-primary {
        background: var(--text-heading);
        border: none;
        color: var(--bg-canvas);
    }

    .btn-primary:active {
        transform: scale(0.95);
    }

    .success-message {
        padding: 3rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }

    .success-message h3 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--text-heading);
    }

    .success-message p {
        margin: 0;
        color: var(--text-muted);
        line-height: 1.5;
        margin-bottom: 0.5rem;
    }

    .success-icon {
        width: 48px;
        height: 48px;
        color: #10b981;
        margin-bottom: 0.5rem;
    }

    .success-btn {
        margin-top: 1rem;
    }

    @media (max-width: 600px) {
        .cta-footer {
            padding: 4rem 1.5rem;
        }

        .cta-content h3 {
            font-size: 1.5rem;
        }

        .modal-content {
            width: 95%;
        }

        .modal-buttons {
            flex-direction: column-reverse;
        }

        .btn-secondary,
        .btn-primary {
            width: 100%;
        }
    }
</style>
