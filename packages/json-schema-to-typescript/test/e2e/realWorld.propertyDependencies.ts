export const input = {
  type: 'object',
  properties: {
    subjects: {
      type: 'object',
      properties: { type: { type: 'string', enum: ['byId', 'manual'] } },
      required: ['type'],
      propertyDependencies: {
        type: {
          byId: {
            type: 'object',
            properties: {
              type: { type: 'string', const: 'byId' },
              visitId: { type: 'string', format: 'uuid' },
              patientId: { type: 'string', format: 'uuid' },
              caregiverId: { type: 'string', format: 'uuid' }
            },
            required: ['type'],
            additionalProperties: false
          },
          manual: {
            type: 'object',
            properties: {
              type: { type: 'string', const: 'manual' },
              visitStartTime: { type: 'string', format: 'date-time' },
              visitEndTime: { type: 'string', format: 'date-time' },
              caregiverName: { type: 'string' },
              patientName: { type: 'string' }
            },
            required: ['type'],
            additionalProperties: false
          }
        }
      }
    },
    status: {
      type: 'object',
      properties: { type: { type: 'string', enum: ['open', 'resolved', 'transferred_to_agency', 'cancelled'] } },
      required: ['type'],
      propertyDependencies: {
        type: {
          open: {
            type: 'object',
            properties: { type: { type: 'string', const: 'open' } },
            additionalProperties: false,
            required: ['type']
          },
          resolved: {
            type: 'object',
            properties: { type: { type: 'string', const: 'resolved' } },
            additionalProperties: false,
            required: ['type']
          },
          transferred_to_agency: {
            type: 'object',
            properties: { type: { type: 'string', const: 'transferred_to_agency' } },
            additionalProperties: false,
            required: ['type']
          },
          cancelled: {
            type: 'object',
            properties: {
              type: { type: 'string', const: 'cancelled' },
              reason: {
                type: 'object',
                properties: { type: { type: 'string', enum: ['duplicate', 'other'] } },
                required: ['type'],
                propertyDependencies: {
                  type: {
                    duplicate: {
                      type: 'object',
                      properties: {
                        type: { type: 'string', const: 'duplicate' },
                        duplicateOf: { type: 'string', format: 'uuid' }
                      },
                      required: ['type'],
                      additionalProperties: false
                    },
                    other: {
                      type: 'object',
                      properties: { type: { type: 'string', const: 'other' }, reason: { type: 'string' } },
                      required: ['type', 'reason'],
                      additionalProperties: false
                    }
                  }
                }
              }
            },
            required: ['type', 'reason'],
            additionalProperties: false
          }
        }
      }
    },
    currentlyWorkedOnBy: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['person_profile', 'service_profile'] },
          id: { type: 'string', format: 'uuid' }
        },
        required: ['type', 'id'],
        additionalProperties: false
      }
    },
    associatedPhoneNumbers: { type: 'array', items: { type: 'string' } }
  },
  required: ['subjects'],
  additionalProperties: false
}
