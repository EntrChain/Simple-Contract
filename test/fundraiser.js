const Fundraiser = artifacts.require("./Fundraiser.sol");

contract('Fundraiser', (accounts) => {
    it("check the participants array after participation", async () => {
        let account = accounts[0];

        const contract = await Fundraiser.deployed();

        await contract.sendMoney({
            from: account,
            value: 14
        });

        let backer = await contract.backers.call(0);

        assert.equal(backer, account, "The backer is not the same");
    });

    it("check the balance increase", async () => {
        let account = accounts[0];

        const contract = await Fundraiser.deployed();

        let balanceBefore = await contract.getBalance();

        await contract.sendMoney({
            from: account,
            value: 1
        });

        let balanceAfter = await contract.getBalance();

        assert.equal(balanceAfter.toString(), parseInt(balanceBefore.toString()) + 1, "The balance is not increased");
    });


    it("check the balance after the fundraising ends", async () => {
        const contract = await Fundraiser.deployed();

        const contractOwner = await contract.owner.call();

        let contractsBalanceBefore = await contract.getBalance();

        let ownersBalanceBefore = await web3.eth.getBalance(contractOwner);

        await contract.endFundraising({from: contractOwner});
        let contractsBalanceAfter = await contract.getBalance();
        let ownersBalanceAfter = await web3.eth.getBalance(contractOwner);

        assert.equal(contractsBalanceAfter, 0, "The contract balance is not 0");

        assert.equal(ownersBalanceBefore >= ownersBalanceAfter + contractsBalanceBefore, true, "The owner balance is not increased");
    });

    // command for test => truffle test
    
});