import Exchange from '../services/exchange'


class Gdax extends Exchange {
  constructor (options) {
    super(options)

    this.id = 'gdax'

    this.endpoints = {
      ASSETS: 'https://api.pro.coinbase.com/ASSETS',
      TRADES: () => `https://api.pro.coinbase.com/ASSETS/${this.pair}/trades`,
    }

    this.matchPairName = (pair) => {
      pair = `${pair.substr(0, 3)}-${pair.substr(3, pair.length)}`

      if (this.pairs.indexOf(pair) !== -1) {
        return pair
      }

      return false
    }

    this.options = Object.assign({
      url: 'wss://ws-feed.pro.coinbase.com',
    }, this.options)
  }

  connect () {
    if (!super.connect()) {
      return
    }

    this.api = new WebSocket(this.getUrl())
    this.api.addEventListener('message', (event) => {
      if (!event) {
        return
      }

      const obj = JSON.parse(event.data)

      if (obj && obj.type === 'match') {
        this.emitTrades([[
          this.id,
          +new Date(obj.time),
          +obj.price,
          +obj.size,
          obj.side === 'buy' ? 0 : 1,
        ]])
      }
    })

    this.api.addEventListener('open', (event) => {
      this.api.send(JSON.stringify({
        type: 'subscribe',
        channels: [{ name: 'full', product_ids: [this.pair] }],
      }))

      this.emitOpen(event)
    })

    this.api.onclose = this.emitClose.bind(this)
    this.api.addEventListener('error', this.emitError.bind(this))
  }

  disconnect () {
    if (!super.disconnect()) {
      return
    }

    if (this.api && this.api.readyState < 2) {
      this.api.close()
    }
  }

  formatASSETS (data) {
    return data.map((a) => a.id)
  }

  /* formatRecentsTrades(response) {
		if (response && response.length) {
			return response.map(trade => [
				this.id,
				+new Date(trade.time),
				+trade.price,
				+trade.size,
				trade.side === 'buy' ? 0 : 1,
			])
		}
	} */
}

export default Gdax
