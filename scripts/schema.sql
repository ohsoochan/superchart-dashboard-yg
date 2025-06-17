CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT NOT NULL -- 예: 'sales', 'blog', 'manager'
);

CREATE TABLE advertisers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    charge_amount DECIMAL(10, 2),
    assigned_employee_id UUID REFERENCES employees(id)
);

CREATE TABLE campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    advertiser_id UUID REFERENCES advertisers(id),
    representative_id UUID REFERENCES employees(id),
    month DATE NOT NULL, -- 월의 첫째 날짜로 저장
    spend_amount DECIMAL(10, 2)
);

CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source TEXT,
    status TEXT NOT NULL DEFAULT 'submitted', -- 예: 'submitted', 'contacted', 'replied', 'meeting_scheduled', 'converted'
    submission_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE cold_emails (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES leads(id),
    recipient_company TEXT NOT NULL,
    sent_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reply_date TIMESTAMP WITH TIME ZONE,
    is_replied BOOLEAN DEFAULT FALSE,
    meeting_scheduled BOOLEAN DEFAULT FALSE,
    meeting_date TIMESTAMP WITH TIME ZONE
);
