<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <h1>Contacts</h1>
                <hr><br><br>
                <button
                  type="button"
                  class="btn btn-succes btn-sm"
                  @click="toggleAddContactModal">
                  Add Contact
                </button>
                <br><br>
                <table class="table table hover">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(contact, index) in contacts" >
                            <td>{{ contact.firstName }}</td>
                            <td>{{ contact.lastName }}</td>
                            <td>{{ contact.email }}</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <button
                                      type="button"
                                      class="btn btn-warning"
                                      @click="toggleEditContactModal(contact)">
                                      Update
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-danger btn-sm"
                                      @click="handleDeleteContact(contact)">
                                      Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            contacts: [],
            message: '',
            showMessage: false
       };
    },
    methods: {
        getContacts() {
            const path = 'http://localhost:5001/contacts'
            axios.get(path)
              .then((res) => {
                this.contacts = res.data.contacts;
              })
              .catch((error) => {
                console.error(error)
              });
        }
    },
    created() {
        this.getContacts();
    },
};    

</script>