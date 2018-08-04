<template>
    <div>
        <div role="dialog"
             class="modal fade in modal-mask"
             v-if="showModal"
             tabindex="-1"
             aria-labelledby="modal-label"
             aria-hidden="true"
             :style="showModal ? 'display: block;' : ''">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            <slot name="modal-header"></slot>
                        </h3>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-question"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="modal-btn-close">
                            <button class="btn btn-default">
                                Close
                            </button>
                        </slot>
                        <slot name="modal-btn-confirm">
                            <button class="btn btn-danger" @click="EventBus.$emit('modal-confirmed')">
                                Confirm
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'admin-modal',
        props: {
            showModal: {
                type: Boolean,
                default() {
                    return false
                }
            }
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-content {
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
    }
</style>