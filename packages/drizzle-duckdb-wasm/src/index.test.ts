import { getBundles } from '@proj-airi/duckdb-wasm/bundles/default-node'
import { describe, expect, it } from 'vitest'

import { drizzle } from '.'

describe('drizzle', { timeout: 10000 }, async () => {
  it('should connect to a DuckDBWasm database', async () => {
    const db = drizzle({ connection: { bundles: getBundles() } })
    const res = await db.execute('SELECT count(*)::INTEGER as v FROM generate_series(0, 100) t(v)')
    expect(res).toBeDefined()
    expect(res).toEqual([{ v: 101 }])
  })
})
