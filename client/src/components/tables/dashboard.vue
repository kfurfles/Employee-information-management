<template>
    <ev-container class="ev-dashboard-table pb-3">
        <div class="row">
            <div class="col">
                <ev-input v-model="filter" :config="{ label: 'Filter', placeholder: 'Insert here ...' }"></ev-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-table
                    show-empty
                    :current-page="currentPage"
                    :per-page="perPage"
                    :items="items"
                    :filter="filter"
                    @filtered="onFiltered"
                    :fields="fields">
                    <template #actions="{ item }">
                        <div class="d-flex">
                            <button type="button" class="btn btn-outline-info mr-1" @click="$emit('onEdit',item)">
                                <svg width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pen fa-w-16 fa-2x"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" class=""></path></svg>
                            </button>
                            <button type="button" class="btn btn-outline-danger ml-1" @click="confirmDel(item)">
                                <svg width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" class=""></path></svg>
                            </button>
                        </div>
                    </template>
                </b-table>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    class="ev-dashboard-table__pagination"
                ></b-pagination>
            </div>
        </div>
    </ev-container>
</template>

<script>

import { BTable } from 'bootstrap-vue'
import { BPagination } from 'bootstrap-vue'
import genericInput from '@/components/shared/generic-input'

export default {
    props:{
        items:{
            type: Array
        },
        fields:{
            type: Array
        }
    },
    data: () => ({
        currentPage: 1,
        perPage: 5,
        filter: '',
        totalRows: '',
    }),
    watch: {
        items(val){
            this.totalRows = val.length
        }
    },
    components:{
        BTable,
        BPagination,
        'ev-input': genericInput
    },
    methods:{
        confirmDel(data){
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.value) {
                    this.$emit('onDel',data)
                }
            })
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    }
}
</script>

<style lang="scss">
.ev-dashboard-table{
    max-width: 100%;
    overflow: hidden;
    position: relative;

    @media (max-width: 576px) {
        &:hover{
            overflow-x: scroll;
        }
    }

    thead th{
        border: none;
    }
    table{
        min-width: 100%;
        overflow-x: scroll;
        white-space: nowrap;
    }

    &__pagination{
        position: absolute;
        top: calc(100% - 20px);
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>
