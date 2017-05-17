
export const MICROSERVICES = {
    'services': {
        label: 'Services',
        entrypoint: {
            url: 'http://localhost:8014/',
        },
        entities: {
            'services': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': { message: 'Title is required.'},
                            'minlength': { message: 'Title must be at least 4 characters long.'},
                            'maxlength': { message: 'Title cannot be more than 24 characters long.'},
                            'someCustomValidationDirective': { message: 'Someone named "Bob" cannot be a hero.'},
                        },
                    },
                    'presentation': {
                        label: 'Presentation',
                        type: 'string',
                        validation: {
                            'required': { message: 'Presentation is required.'},
                        },
                    },
                    'form': {
                        label: 'Form',
                        type: 'string',
                        validation: {
                            'required': { message: 'Form is required.'},
                        }
                    },
                    'description': {
                        label: 'Description',
                        type: 'string',
                        validation: {
                            'required': { message: 'Description is required.'},
                        },
                    },
                },
            },
        },
    },
    'cases': {
        label: 'Cases',
        entrypoint: {
            url: 'http://localhost:8015/',
        },
        entities: {
            'cases': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
    'assets': {
        label: 'Assets',
        entrypoint: {
            url: 'http://localhost:8011/',
        },
        entities: {
            'assets': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
    'topics': {
        label: 'Topics',
        entrypoint: {
            url: 'http://localhost:8016/',
        },
        entities: {
            'topics': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
    'tasks': {
        label: 'Tasks',
        entrypoint: {
            url: 'http://localhost:8019/',
        },
        entities: {
            'tasks': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
    'records': {
        label: 'Records',
        entrypoint: {
            url: 'http://localhost:8012/',
        },
        entities: {
            'records': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
    'interactions': {
        label: 'Interactions',
        entrypoint: {
            url: 'http://localhost:8017/',
        },
        entities: {
            'communications': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
            'interactions': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                    'channel': {
                        label: 'Channel',
                        type: 'string',
                        field: {
                            type: 'select',
                            options: {
                                'sms': 'SMS',
                                'email': 'Email',
                                'in_person': 'In-Person',
                                'inbox': 'Inbox',
                            },
                        },
                        validation: {
                            'required': {message: 'Inbox is required.'},
                        },
                    },
                },
            },
        },
    },
    'individuals': {
        label: 'Individuals',
        entrypoint: {
            url: 'http://localhost:8013/',
        },
        entities: {
            'individuals': {
                properties: {
                    'username': {
                        label: 'Username',
                        type: 'string',
                        validation: {
                            'required': {message: 'username is required.'},
                        },
                    },
                },
            },
        },
    },
    'identities': {
        label: 'Identities',
        entrypoint: {
            url: 'http://localhost:8013/',
        },
        entities: {
            'identities': {
                properties: {
                    'title': {
                        label: 'Title',
                        type: 'string',
                        validation: {
                            'required': {message: 'Title is required.'},
                        },
                    },
                },
            },
        },
    },
};
