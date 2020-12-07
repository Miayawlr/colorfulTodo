interface Ctx {
  body: any
}

async function getMenuList<T extends Ctx>(ctx: T, next: any): Promise<void> {
  const boyds = 'menuList'
  await next()
  ctx.body = boyds
}

// class

export { getMenuList }
