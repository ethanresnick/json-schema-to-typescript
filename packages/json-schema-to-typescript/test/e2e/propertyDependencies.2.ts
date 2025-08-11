export const input = {
  title: 'Multiple Property Dependencies Example',
  type: 'object',
  properties: {
    platform: {
      type: 'string',
      enum: ['web', 'mobile']
    },
    framework: {
      type: 'string',
      enum: ['react', 'vue', 'angular', 'react-native', 'flutter']
    },
    language: {
      type: 'string',
      enum: ['typescript', 'javascript']
    }
  },
  required: ['platform'],
  propertyDependencies: {
    platform: {
      web: {
        type: 'object',
        properties: {
          framework: {
            type: 'string',
            enum: ['react', 'vue', 'angular']
          },
          language: {
            type: 'string',
            enum: ['typescript', 'javascript']
          }
        },
        required: ['framework', 'language']
      },
      mobile: {
        type: 'object',
        properties: {
          framework: {
            type: 'string',
            enum: ['react-native', 'flutter']
          }
        },
        required: ['framework']
      }
    }
  }
}
