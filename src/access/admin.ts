import { type Access } from 'payload'

/**
 * ABL: admin level user https://adrianmaj.com/en/posts/payloadcms-from-scratch-3-users-and-access-control
 * @param user
 */
export const admin: Access = ({ req: { user } }) => {
  return user?.role === 'admin'
}
