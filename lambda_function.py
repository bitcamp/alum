import json
import os

def lambda_handler(event, context):
    err_resp = {
        'status': '200',
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        }
    }

    if not 'body' in event:
        return err_resp


    ev = json.loads(event['body'])
    if not (('password' in ev) and ('origin' in ev)):
        return err_resp

    pa = ev['password']
    ori = ev['origin']

    if pa != os.environ['password']:
        return err_resp

    url = os.environ['index'] if ori == 'index' else os.environ['join']

    response = {
        'statusCode': 200,
        'body': url,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        }
    }

    return response