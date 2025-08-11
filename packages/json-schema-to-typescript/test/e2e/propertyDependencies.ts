export const input = {
  title: 'Property Dependencies Example',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['user', 'admin']
    },
    name: {
      type: 'string'
    },
    permissions: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    email: {
      type: 'string'
    }
  },
  required: ['type'],
  propertyDependencies: {
    type: {
      user: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        required: ['name']
      },
      admin: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          age: {
            type: 'number'
          },
          permissions: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        },
        required: ['name', 'permissions']
      }
    }
  }
}
