import { type Access } from 'payload'

/**
 * ABL: common user level user https://adrianmaj.com/en/posts/payloadcms-from-scratch-3-users-and-access-control
 * @param user
 */
export const user: Access = ({ req: { user } }) => {
  return Boolean(user && ['admin', 'editor', 'user'].includes(user.role))
}
