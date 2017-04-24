/**
 * Created by laxminarayana on 4/21/2017.
 */

var  testing=require('../Addition')
var assert=require('assert')

describe('check addition',function(){
    describe('check if addition is correct', function(){
        it('result should be 11', function(){
            assert.equals(11, testing.add(5,6));
        });
    });
});
