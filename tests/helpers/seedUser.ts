import { getPayload, TypedUser } from 'payload'
import config from '../../src/payload.config.js'

export const testUserForLogin = {
  email: 'dev@payloadcms.com',
  password: 'test',
}

export const testUser: Partial<Omit<TypedUser, 'id' | 'sizes' | 'createdAt' | 'deletedAt' | 'updatedAt' | 'collection'>> = {
  ...testUserForLogin,
  role: 'admin',
}

/**
 * Seeds a test user for e2e admin tests.
 */
export async function seedTestUser(): Promise<void> {
  const payload = await getPayload({ config })

  // Delete existing test user if any
  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: testUser.email,
      },
    },
  })

  // Create fresh test user
  await payload.create({
    collection: 'users',
    data: testUser,
    draft: true,
  })
}

/**
 * Cleans up test user after tests
 */
export async function cleanupTestUser(): Promise<void> {
  const payload = await getPayload({ config })

  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: testUser.email,
      },
    },
  })
}
