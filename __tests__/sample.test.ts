describe('sample', () => {
    it('adds 1 + 2 to equal 3 in Typescript', () => { //itとtestの挙動は同じ
        const sampleTest = require('../app/javascript/sample_test');
        expect(sampleTest.sum(1, 2)).toBe(3);
    });

    it('テストマッチャー', () => { // it.only it.skipが使える
        let a = 0;
        let b = 0;
        beforeEach(() => { //
            a = 1;
            b = 2;
        });

        expect(1 + 2).toBe(3);
        expect(1).not.toBe(0);
        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull(); //NULLの確認したいときはこれ使って欲しい
        expect(undefined).toBeUndefined(); //check undefind
        expect('aa').toBeDefined(); //check defined
        expect(NaN).toBeNaN(); //NaN
        expect(11).toBeGreaterThan(10);  // i > 10
        expect(11).toBeGreaterThanOrEqual(10); // i >= 10
        expect(9).toBeLessThan(10); // i < 10
        expect(9).toBeLessThanOrEqual(10); // i <= 10
        expect([1, '2', 3]).toHaveLength(3); // array or string
        class A { }
        expect(new A()).toBeInstanceOf(A); //classのインスタンスか確認
        expect('aabcdeb').toMatch(/(abc|def)/); //含まれるかチェック
        const test1 = { a: 1, b: 'aaa' };
        const test2 = { a: 1, b: 'aaa' };
        expect(test1).toEqual(test2); // オブジェクトの一致
        const testHash = { a: 1, b: 'aaa', c: { aa: 12, bb: 'abab' }, d: false };
        expect(testHash).toHaveProperty('d'); //dの存在確認
        expect(testHash).toHaveProperty('c.bb', 'abab'); //オブジェクトの中身の中身のチェック
        expect([1, '2', 3]).toContain(1); //arr内の１の存在確認
        expect('testaabbcc').toContain('aabb'); //文字列の追加
    });
});

//yarn add @types/jest jest-cli ts-jest

