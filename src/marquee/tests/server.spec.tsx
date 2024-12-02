import { setup } from '@css-render/vue3-ssr'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { NEmpty } from '../..'

describe('sSR', () => {
  it('works', async () => {
    const app = createSSRApp(() => <NEmpty />)
    setup(app)
    try {
      await renderToString(app)
    }
    catch (e) {
      expect(e).not.toBeTruthy()
    }
  })
})