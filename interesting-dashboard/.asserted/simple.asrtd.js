const { expect } = require('chai');
const { random } = require('lodash');

describe('occasionally failing tests', () => {
  it('fail 10% of the time', async () => {
    expect(random(1, true)).to.be.above(0.1);
  });

  it('fail 5% of the time', async () => {
    expect(random(1, true)).to.be.above(0.05);
  });

  it('always pass', async () => {
    expect(true).to.eql(true);
  });

  describe('nested suite', () => {
    it('fail 10% of the time', async () => {
      expect(random(1, true)).to.be.above(0.1);
    });

    it('always pass', async () => {
      expect(true).to.eql(true);
    });

    it('fail 4% of the time', async () => {
      expect(random(1, true)).to.be.above(0.04);
    });

    it('fail 2% of the time', async () => {
      expect(random(1, true)).to.be.above(0.02);
    });

    it('timeout 5% of the time', (done) => {
      if (random(1, true) < 0.05) {
        setTimeout(done, 3000);
      } else {
        done();
      }
    });
  });
});
