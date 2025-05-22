# Used Car Dataset REST API

## Base URL
```
https://api.usedcars.com/v1
```

## Authentication
All requests require an API key in the header:
```
Authorization: Bearer YOUR_API_KEY
```

---

## 1. Vehicle Identity

### Get Vehicle Identity
```http
GET /vehicles/{vehicleId}/identity
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "make": "BMW",
  "model": "3 Series",
  "variant": "320i M Sport",
  "year": 2020,
  "registration": "201-D-12345",
  "vin": "WBA12345678901234",
  "color": "Alpine White",
  "doors": 4,
  "bodyType": "Saloon",
  "transmission": "Automatic",
  "fuelType": "Petrol",
  "engineSize": 2.0,
  "mileage": 25000,
  "owners": 1,
  "location": {
    "dealership": "Premium Motors Dublin Ltd",
    "address": "45 Grafton Street, Dublin 2, D02 XY89",
    "postcode": "D02 XY89",
    "county": "Dublin"
  }
}
```

### Update Vehicle Identity
```http
PUT /vehicles/{vehicleId}/identity
```

---

## 2. Vehicle Images

### Get All Vehicle Images
```http
GET /vehicles/{vehicleId}/images
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "images": [
    {
      "imageId": "img_001",
      "category": "exterior_front",
      "url": "https://images.usedcars.com/vehicles/VIN12345678901234/exterior_front_001.jpg",
      "thumbnail": "https://images.usedcars.com/vehicles/VIN12345678901234/thumb_exterior_front_001.jpg",
      "isPrimary": true,
      "uploadDate": "2024-01-15T10:30:00Z"
    },
    {
      "imageId": "img_002",
      "category": "interior_dashboard",
      "url": "https://images.usedcars.com/vehicles/VIN12345678901234/interior_dashboard_001.jpg",
      "thumbnail": "https://images.usedcars.com/vehicles/VIN12345678901234/thumb_interior_dashboard_001.jpg",
      "isPrimary": false,
      "uploadDate": "2024-01-15T10:32:00Z"
    }
  ],
  "totalImages": 15
}
```

### Upload Vehicle Image
```http
POST /vehicles/{vehicleId}/images
Content-Type: multipart/form-data
```

---

## 3. Standard Specification

### Get Vehicle Specifications
```http
GET /vehicles/{vehicleId}/specifications
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "basicSpecs": {
    "engine": {
      "capacity": "1998cc",
      "cylinders": 4,
      "configuration": "Inline",
      "aspiration": "Turbocharged",
      "power": "184 HP",
      "torque": "300 Nm"
    },
    "performance": {
      "topSpeed": "235 km/h",
      "acceleration0to100": "7.1 seconds",
      "fuelType": "Petrol"
    },
    "dimensions": {
      "length": "4709mm",
      "width": "1827mm",
      "height": "1442mm",
      "wheelbase": "2851mm",
      "weight": "1570kg"
    },
    "capacities": {
      "fuelTank": "59 litres",
      "bootSpace": "480 litres",
      "seatingCapacity": 5
    }
  },
  "features": {
    "safety": ["ABS", "ESP", "Airbags", "Lane Departure Warning"],
    "comfort": ["Climate Control", "Heated Seats", "Navigation System"],
    "technology": ["Bluetooth", "USB Connectivity", "Wireless Charging"]
  }
}
```

---

## 4. Vehicle Technical Data

### Get Technical Data
```http
GET /vehicles/{vehicleId}/technical-data
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "engine": {
    "code": "B48A20T1",
    "type": "4-cylinder turbo petrol",
    "displacement": 1998,
    "maxPower": "135kW @ 5000-6500rpm",
    "maxTorque": "300Nm @ 1350-4000rpm",
    "compressionRatio": "11.0:1",
    "fuelSystem": "Direct injection",
    "emissionStandard": "Euro 6"
  },
  "transmission": {
    "type": "8-speed automatic",
    "gears": 8,
    "driveType": "RWD"
  },
  "suspension": {
    "front": "MacPherson struts",
    "rear": "Multi-link"
  },
  "brakes": {
    "front": "Ventilated discs",
    "rear": "Solid discs",
    "abs": true,
    "ebd": true
  },
  "wheels": {
    "frontSize": "225/50R17",
    "rearSize": "225/50R17",
    "wheelSize": "17 inch alloy"
  }
}
```

---

## 5. Vehicle Valuations

### Get Current Valuation
```http
GET /vehicles/{vehicleId}/valuations
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "currentValuation": {
    "tradeValue": 18500,
    "retailValue": 21500,
    "privateValue": 20000,
    "currency": "EUR",
    "valuationDate": "2024-05-22T00:00:00Z",
    "mileageAtValuation": 25000
  },
  "marketAnalysis": {
    "averageMarketPrice": 20200,
    "priceRange": {
      "min": 17500,
      "max": 23000
    },
    "marketPosition": "Below Average",
    "daysOnMarket": 28
  },
  "depreciation": {
    "monthlyRate": 1.2,
    "yearlyRate": 14.5,
    "totalDepreciation": 28.5,
    "originalPrice": 32000
  },
  "factors": {
    "mileage": "Average",
    "condition": "Good",
    "serviceHistory": "Full",
    "accidents": "None reported"
  }
}
```

### Get Valuation History
```http
GET /vehicles/{vehicleId}/valuations/history
```

---

## 6. Vehicle History Check

### Get Vehicle History
```http
GET /vehicles/{vehicleId}/history
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "historyCheck": {
    "checkDate": "2024-05-22T10:00:00Z",
    "dataSource": "NCTS, Motor Insurance Database, Finance Houses",
    "overallStatus": "Clear"
  },
  "ownership": {
    "numberOfOwners": 1,
    "ownershipHistory": [
      {
        "ownerNumber": 1,
        "acquisitionDate": "2020-03-15",
        "ownershipType": "Private",
        "duration": "4 years 2 months"
      }
    ]
  },
  "finance": {
    "outstandingFinance": false,
    "previousFinance": true,
    "financeType": "Hire Purchase",
    "settledDate": "2023-03-15"
  },
  "insurance": {
    "totalLossRecord": false,
    "theftRecord": false,
    "floodDamage": false,
    "fireRecord": false
  },
  "accidents": {
    "accidentRecord": false,
    "insuranceClaims": 0
  },
  "recalls": {
    "outstandingRecalls": 0,
    "completedRecalls": 2
  },
  "mileageDiscrepancies": false,
  "plateChanges": 0
}
```

---

## 7. NCT Expire Date

### Get NCT Information
```http
GET /vehicles/{vehicleId}/nct
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "currentNct": {
    "expiryDate": "2024-09-15",
    "testDate": "2023-09-10",
    "testResult": "Pass",
    "certificateNumber": "1234567890",
    "testMileage": 23500,
    "testingStation": "NCT Centre Tallaght, Dublin"
  },
  "nctHistory": [
    {
      "testDate": "2023-09-10",
      "result": "Pass",
      "mileage": 23500,
      "advisories": 1,
      "minorDefects": 0,
      "majorDefects": 0,
      "dangerous": 0
    },
    {
      "testDate": "2022-09-08",
      "result": "Pass",
      "mileage": 18200,
      "advisories": 0,
      "minorDefects": 0,
      "majorDefects": 0,
      "dangerous": 0
    }
  ],
  "advisories": [
    {
      "category": "Tyres",
      "description": "Nearside front tyre has minor cut",
      "severity": "Advisory"
    }
  ]
}
```

---

## 8. Finance Calculations

### Get Finance Options
```http
GET /vehicles/{vehicleId}/finance
```

**Query Parameters:**
- `deposit` (optional): Deposit amount
- `term` (optional): Loan term in months
- `apr` (optional): Annual percentage rate

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "vehiclePrice": 21500,
  "financeOptions": [
    {
      "type": "Hire Purchase",
      "deposit": 2150,
      "loanAmount": 19350,
      "apr": 6.9,
      "term": 48,
      "monthlyPayment": 455.23,
      "totalAmount": 24001.04,
      "totalInterest": 2501.04
    },
    {
      "type": "Personal Contract Purchase",
      "deposit": 2150,
      "loanAmount": 19350,
      "apr": 7.9,
      "term": 48,
      "monthlyPayment": 325.67,
      "balloonPayment": 8500,
      "totalAmount": 26222.16,
      "totalInterest": 4722.16,
      "mileageLimit": 10000
    },
    {
      "type": "Personal Loan",
      "deposit": 0,
      "loanAmount": 21500,
      "apr": 8.9,
      "term": 60,
      "monthlyPayment": 441.32,
      "totalAmount": 26479.20,
      "totalInterest": 4979.20
    }
  ]
}
```

### Calculate Custom Finance
```http
POST /vehicles/{vehicleId}/finance/calculate
```

---

## 9. Total Cost of Ownership

### Get TCO Analysis
```http
GET /vehicles/{vehicleId}/total-cost-ownership
```

**Query Parameters:**
- `period`: Ownership period in months (default: 36)
- `annualMileage`: Expected annual mileage (default: 12000)

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "analysisParameters": {
    "period": 36,
    "annualMileage": 12000,
    "totalMileage": 36000
  },
  "initialCosts": {
    "purchasePrice": 21500,
    "registrationFee": 55,
    "insurance": 850,
    "extendedWarranty": 450
  },
  "runningCosts": {
    "fuel": {
      "monthly": 165,
      "total": 5940
    },
    "insurance": {
      "monthly": 75,
      "total": 2700
    },
    "roadTax": {
      "annual": 280,
      "total": 840
    },
    "maintenance": {
      "monthly": 85,
      "total": 3060
    },
    "tyres": {
      "replacements": 1,
      "cost": 600
    },
    "nct": {
      "annual": 55,
      "total": 165
    }
  },
  "depreciation": {
    "startValue": 21500,
    "endValue": 14200,
    "totalDepreciation": 7300
  },
  "summary": {
    "totalCostOfOwnership": 41564.55,
    "monthlyCost": 1154.57,
    "costPerMile": 1.15,
    "breakdown": {
      "depreciation": 7300,
      "fuel": 5940,
      "maintenance": 3060,
      "insurance": 2700,
      "tyres": 600,
      "roadTax": 495,
      "mot": 164.55,
      "other": 305
    }
  }
}
```

---

## 10. Tyre Sizes

### Get Tyre Information
```http
GET /vehicles/{vehicleId}/tyres
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "currentTyres": {
    "front": {
      "size": "225/50R17",
      "brand": "Continental",
      "model": "ContiSportContact 5",
      "treadDepth": 6.5,
      "condition": "Good",
      "lastChanged": "2023-08-15"
    },
    "rear": {
      "size": "225/50R17",
      "brand": "Continental",
      "model": "ContiSportContact 5",
      "treadDepth": 5.8,
      "condition": "Good",
      "lastChanged": "2023-08-15"
    }
  },
  "specifications": {
    "loadIndex": 98,
    "speedRating": "Y",
    "recommended": true,
    "alternatives": [
      "205/55R17",
      "235/45R17"
    ]
  },
  "replacement": {
    "recommendedBrands": [
      "Continental",
      "Michelin",
      "Pirelli",
      "Bridgestone"
    ],
    "estimatedCost": {
      "budget": 280,
      "midRange": 480,
      "premium": 680
    },
    "nextReplacementMileage": 45000
  }
}
```

---

## 11. Fuel Consumption

### Get Fuel Consumption Data
```http
GET /vehicles/{vehicleId}/fuel-consumption
```

**Response Example:**
```json
{
  "vehicleId": "VIN12345678901234",
  "officialFigures": {
    "wltpCombined": 6.8,
    "wltpUrban": 8.2,
    "wltpExtraUrban": 5.9,
    "wltpHighway": 6.1,
    "co2Emissions": 155,
    "fuelType": "Petrol",
    "testStandard": "WLTP"
  },
  "realWorldData": {
    "averageConsumption": 7.4,
    "cityDriving": 9.1,
    "highwayDriving": 6.2,
    "combinedDriving": 7.4,
    "dataSource": "Owner reports",
    "sampleSize": 1247
  },
  "costs": {
    "fuelPrice": 1.65,
    "currency": "EUR",
    "costPer100km": 10.73,
    "annualFuelCost": 1287.6,
    "basedOnMileage": 12000
  },
  "environmental": {
    "co2PerKm": 155,
    "fuelEfficiencyRating": "C",
    "annualCo2": 1860,
    "comparisonVsAverage": "5% above average"
  }
}
```

---

## Common Response Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Vehicle Not Found
- `422` - Validation Error
- `500` - Internal Server Error

## Rate Limiting

- 1000 requests per hour per API key
- Rate limit headers included in all responses:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining` 
  - `X-RateLimit-Reset`

## Pagination

For endpoints returning multiple items, use:
- `?page=1&limit=20` (default: page=1, limit=10)
- Response includes pagination metadata

## Filtering and Searching

Most GET endpoints support filtering:
- `?make=BMW&year=2020`
- `?price_min=15000&price_max=25000`
- `?search=BMW 3 Series`
