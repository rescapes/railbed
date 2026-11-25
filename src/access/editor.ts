import { type Access } from 'payload'

/**
 * ABL: editor level user https://adrianmaj.com/en/posts/payloadcms-from-scratch-3-users-and-access-control
 * @param user
 */
export const editor: Access = ({ req: { user } }) => {
  return Boolean(user && ['admin', 'editor'].includes(user.role))
}

