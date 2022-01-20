import { HomeTableInfo } from 'src/app/data/schema/home';

export function fakeHome(): HomeTableInfo[] {
    return getHomeTableContent();
}

function getHomeTableContent(): HomeTableInfo[] {
    const data = [
        {
            title: 'サイト全般',
            subtitle: 'サイト全般',
            section: 'ＳＣＫ　品質部門　品質企画部',
            user: 'サイト管理担当者',
            email: 'SCK-Quality-Information-Owner@jp.sony.com',
        },
        {
            title: '工程変更全般',
            subtitle: 'ASIC/TK',
            section: '品質保証2課',
            user: '吉満',
            email: 'Kaya.Yoshimitsu@.sony.com',
        },
        {
            title: '工程変更全般',
            subtitle: '田中テスト',
            section: 'BPM推進2課',
            user: '田中',
            email: 'Hidenori.x.Tanaka@.sony.com',
        },
        {
            title: '工程変更全般',
            subtitle: '森田New事務局',
            section: 'BPM推進2課',
            user: '森田　由紀',
            email: 'Yuki.Morita@.sony.com',
        },
    ];

    return data as HomeTableInfo[];
}
