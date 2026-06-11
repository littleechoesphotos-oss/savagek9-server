"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc3) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc3 = __getOwnPropDesc(from, key)) || desc3.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// drizzle/schema.ts
var schema_exports = {};
__export(schema_exports, {
  DEFAULT_PERMISSIONS: () => DEFAULT_PERMISSIONS,
  appointments: () => appointments,
  boardingDailyLogs: () => boardingDailyLogs,
  boardingReservations: () => boardingReservations,
  breedingCycles: () => breedingCycles,
  breedingDailyTasks: () => breedingDailyTasks,
  breedingFlags: () => breedingFlags,
  breedingHealthEvents: () => breedingHealthEvents,
  breedingMediaFiles: () => breedingMediaFiles,
  bridgingSessions: () => bridgingSessions,
  clientCommunications: () => clientCommunications,
  clientOnboarding: () => clientOnboarding,
  clients: () => clients,
  contracts: () => contracts,
  curriculumLogs: () => curriculumLogs,
  dogDailyLogs: () => dogDailyLogs,
  dogFeedingInfo: () => dogFeedingInfo,
  dogMedications: () => dogMedications,
  dogs: () => dogs,
  ebookAccess: () => ebookAccess,
  evaluationScores: () => evaluationScores,
  evaluations: () => evaluations,
  expenses: () => expenses,
  facilityTasks: () => facilityTasks,
  goHomeChecklists: () => goHomeChecklists,
  googleCalendarTokens: () => googleCalendarTokens,
  healthRecords: () => healthRecords,
  intakeRequirements: () => intakeRequirements,
  inventory: () => inventory,
  invoices: () => invoices,
  leadFollowupLogs: () => leadFollowupLogs,
  leadFollowupSequences: () => leadFollowupSequences,
  leadFollowupSteps: () => leadFollowupSteps,
  litterDailyLogs: () => litterDailyLogs,
  litters: () => litters,
  media: () => media,
  messages: () => messages,
  notificationSchedules: () => notificationSchedules,
  payrollPayments: () => payrollPayments,
  puppies: () => puppies,
  puppyDailyLogs: () => puppyDailyLogs,
  puppyFlags: () => puppyFlags,
  puppyMatches: () => puppyMatches,
  pushTokens: () => pushTokens,
  staffDogAssignments: () => staffDogAssignments,
  staffInvitations: () => staffInvitations,
  staffMembers: () => staffMembers,
  staffPayHistory: () => staffPayHistory,
  taskTemplates: () => taskTemplates,
  timeEntries: () => timeEntries,
  trainingLogs: () => trainingLogs,
  trainingMedia: () => trainingMedia,
  transactions: () => transactions,
  users: () => users,
  waitlist: () => waitlist
});
var import_mysql_core, users, clients, clientCommunications, dogs, appointments, trainingLogs, breedingCycles, litters, puppies, waitlist, boardingReservations, boardingDailyLogs, invoices, contracts, media, inventory, timeEntries, bridgingSessions, ebookAccess, messages, pushTokens, notificationSchedules, healthRecords, intakeRequirements, staffMembers, DEFAULT_PERMISSIONS, staffPayHistory, staffDogAssignments, trainingMedia, clientOnboarding, dogFeedingInfo, dogMedications, leadFollowupSequences, leadFollowupSteps, leadFollowupLogs, transactions, expenses, staffInvitations, dogDailyLogs, facilityTasks, googleCalendarTokens, puppyDailyLogs, litterDailyLogs, taskTemplates, breedingDailyTasks, breedingFlags, puppyFlags, curriculumLogs, breedingHealthEvents, evaluations, evaluationScores, puppyMatches, goHomeChecklists, breedingMediaFiles, payrollPayments;
var init_schema = __esm({
  "drizzle/schema.ts"() {
    "use strict";
    import_mysql_core = require("drizzle-orm/mysql-core");
    users = (0, import_mysql_core.mysqlTable)("users", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      openId: (0, import_mysql_core.varchar)("openId", { length: 64 }).notNull().unique(),
      name: (0, import_mysql_core.text)("name"),
      email: (0, import_mysql_core.varchar)("email", { length: 320 }),
      phone: (0, import_mysql_core.varchar)("phone", { length: 32 }),
      loginMethod: (0, import_mysql_core.varchar)("loginMethod", { length: 64 }),
      role: (0, import_mysql_core.mysqlEnum)("role", ["user", "admin", "trainer", "staff"]).default("user").notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull(),
      lastSignedIn: (0, import_mysql_core.timestamp)("lastSignedIn").defaultNow().notNull()
    });
    clients = (0, import_mysql_core.mysqlTable)("clients", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      userId: (0, import_mysql_core.int)("userId"),
      firstName: (0, import_mysql_core.varchar)("firstName", { length: 128 }).notNull(),
      lastName: (0, import_mysql_core.varchar)("lastName", { length: 128 }).notNull(),
      email: (0, import_mysql_core.varchar)("email", { length: 320 }),
      phone: (0, import_mysql_core.varchar)("phone", { length: 32 }),
      leadStatus: (0, import_mysql_core.mysqlEnum)("leadStatus", [
        "new",
        "contacted",
        "qualified",
        "waitlist",
        "active",
        "past"
      ]).default("new").notNull(),
      leadSource: (0, import_mysql_core.mysqlEnum)("leadSource", ["meta", "wix", "referral", "website", "other"]).default("other"),
      notes: (0, import_mysql_core.text)("notes"),
      tags: (0, import_mysql_core.json)("tags").$type(),
      assignedStaffId: (0, import_mysql_core.int)("assignedStaffId"),
      squareCustomerId: (0, import_mysql_core.varchar)("squareCustomerId", { length: 128 }),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    clientCommunications = (0, import_mysql_core.mysqlTable)("client_communications", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      type: (0, import_mysql_core.mysqlEnum)("type", ["email", "sms", "call", "note"]).notNull(),
      content: (0, import_mysql_core.text)("content"),
      staffId: (0, import_mysql_core.int)("staffId"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    dogs = (0, import_mysql_core.mysqlTable)("dogs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId"),
      name: (0, import_mysql_core.varchar)("name", { length: 128 }).notNull(),
      callName: (0, import_mysql_core.varchar)("callName", { length: 128 }),
      breed: (0, import_mysql_core.varchar)("breed", { length: 128 }),
      dateOfBirth: (0, import_mysql_core.date)("dateOfBirth"),
      gender: (0, import_mysql_core.mysqlEnum)("gender", ["M", "F"]),
      isIntact: (0, import_mysql_core.boolean)("isIntact").default(true),
      weight: (0, import_mysql_core.decimal)("weight", { precision: 6, scale: 2 }),
      color: (0, import_mysql_core.varchar)("color", { length: 128 }),
      microchipNumber: (0, import_mysql_core.varchar)("microchipNumber", { length: 128 }),
      dogType: (0, import_mysql_core.mysqlEnum)("dogType", ["breeding_stock", "puppy", "client_dog", "retired", "other"]).default("other"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["active", "personal", "rehomed", "sold", "boarding", "retired"]).default("active").notNull(),
      behaviorNotes: (0, import_mysql_core.text)("behaviorNotes"),
      medicalNotes: (0, import_mysql_core.text)("medicalNotes"),
      feedingNotes: (0, import_mysql_core.text)("feedingNotes"),
      photoUrl: (0, import_mysql_core.text)("photoUrl"),
      isBreeder: (0, import_mysql_core.boolean)("isBreeder").default(false),
      // Alert flags
      alertBiteRisk: (0, import_mysql_core.boolean)("alertBiteRisk").default(false),
      alertInHeat: (0, import_mysql_core.boolean)("alertInHeat").default(false),
      alertDogReactive: (0, import_mysql_core.boolean)("alertDogReactive").default(false),
      alertNervous: (0, import_mysql_core.boolean)("alertNervous").default(false),
      alertHandleWithCaution: (0, import_mysql_core.boolean)("alertHandleWithCaution").default(false),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    appointments = (0, import_mysql_core.mysqlTable)("appointments", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId"),
      dogId: (0, import_mysql_core.int)("dogId"),
      staffId: (0, import_mysql_core.int)("staffId"),
      type: (0, import_mysql_core.mysqlEnum)("type", ["training", "eval", "boarding", "breeding", "grooming", "other"]).default("training").notNull(),
      title: (0, import_mysql_core.varchar)("title", { length: 256 }),
      startTime: (0, import_mysql_core.timestamp)("startTime").notNull(),
      endTime: (0, import_mysql_core.timestamp)("endTime"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["scheduled", "completed", "cancelled", "no_show"]).default("scheduled").notNull(),
      notes: (0, import_mysql_core.text)("notes"),
      googleCalendarEventId: (0, import_mysql_core.varchar)("googleCalendarEventId", { length: 512 }),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    trainingLogs = (0, import_mysql_core.mysqlTable)("training_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      trainerId: (0, import_mysql_core.int)("trainerId"),
      appointmentId: (0, import_mysql_core.int)("appointmentId"),
      sessionDate: (0, import_mysql_core.date)("sessionDate").notNull(),
      obedienceScore: (0, import_mysql_core.int)("obedienceScore"),
      behaviorScore: (0, import_mysql_core.int)("behaviorScore"),
      notes: (0, import_mysql_core.text)("notes"),
      aiSummary: (0, import_mysql_core.text)("aiSummary"),
      visibleToClient: (0, import_mysql_core.boolean)("visibleToClient").default(false),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    breedingCycles = (0, import_mysql_core.mysqlTable)("breeding_cycles", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      femaleDogId: (0, import_mysql_core.int)("femaleDogId").notNull(),
      startDate: (0, import_mysql_core.date)("startDate").notNull(),
      endDate: (0, import_mysql_core.date)("endDate"),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    litters = (0, import_mysql_core.mysqlTable)("litters", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterName: (0, import_mysql_core.varchar)("litterName", { length: 256 }).notNull(),
      sireId: (0, import_mysql_core.int)("sireId"),
      damId: (0, import_mysql_core.int)("damId"),
      breedingCycleId: (0, import_mysql_core.int)("breedingCycleId"),
      firstTieDate: (0, import_mysql_core.date)("firstTieDate"),
      aiDate: (0, import_mysql_core.date)("aiDate"),
      estimatedDueDate: (0, import_mysql_core.date)("estimatedDueDate"),
      birthDate: (0, import_mysql_core.date)("birthDate"),
      estimatedGoHomeDate: (0, import_mysql_core.date)("estimatedGoHomeDate"),
      actualGoHomeStartDate: (0, import_mysql_core.date)("actualGoHomeStartDate"),
      breedCross: (0, import_mysql_core.varchar)("breedCross", { length: 256 }),
      pregnancyStatus: (0, import_mysql_core.mysqlEnum)("pregnancyStatus", ["planned", "bred", "confirmed_pregnant", "not_pregnant", "whelped", "closed"]).default("planned").notNull(),
      puppyCount: (0, import_mysql_core.int)("puppyCount").default(0),
      // Legacy columns kept for backward compat
      expectedDate: (0, import_mysql_core.date)("expectedDate"),
      whelpDate: (0, import_mysql_core.date)("whelpDate"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["planned", "pregnant", "whelped", "weaned"]).default("planned").notNull(),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    puppies = (0, import_mysql_core.mysqlTable)("puppies", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId").notNull(),
      puppyNumber: (0, import_mysql_core.int)("puppyNumber"),
      temporaryName: (0, import_mysql_core.varchar)("temporaryName", { length: 128 }),
      registeredName: (0, import_mysql_core.varchar)("registeredName", { length: 256 }),
      collarColor: (0, import_mysql_core.varchar)("collarColor", { length: 64 }),
      gender: (0, import_mysql_core.mysqlEnum)("gender", ["M", "F"]),
      sex: (0, import_mysql_core.mysqlEnum)("sex", ["male", "female", "unknown"]).default("unknown"),
      birthTime: (0, import_mysql_core.timestamp)("birthTime"),
      birthWeight: (0, import_mysql_core.decimal)("birthWeight", { precision: 6, scale: 2 }),
      birthWeightGrams: (0, import_mysql_core.decimal)("birthWeightGrams", { precision: 8, scale: 2 }),
      currentWeight: (0, import_mysql_core.decimal)("currentWeight", { precision: 6, scale: 2 }),
      currentWeightGrams: (0, import_mysql_core.decimal)("currentWeightGrams", { precision: 8, scale: 2 }),
      colorMarkings: (0, import_mysql_core.text)("colorMarkings"),
      microchipNumber: (0, import_mysql_core.varchar)("microchipNumber", { length: 128 }),
      healthStatus: (0, import_mysql_core.text)("healthStatus"),
      placementStatus: (0, import_mysql_core.mysqlEnum)("placementStatus", ["available", "reserved", "placed"]).default("available").notNull(),
      status: (0, import_mysql_core.mysqlEnum)("puppyStatus", ["available", "reserved", "matched", "sold", "keep_back", "monitoring", "deceased"]).default("available"),
      assignedClientId: (0, import_mysql_core.int)("assignedClientId"),
      placementType: (0, import_mysql_core.varchar)("placementType", { length: 128 }),
      name: (0, import_mysql_core.varchar)("name", { length: 128 }),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    waitlist = (0, import_mysql_core.mysqlTable)("waitlist", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      preferences: (0, import_mysql_core.text)("preferences"),
      depositPaid: (0, import_mysql_core.boolean)("depositPaid").default(false),
      depositAmount: (0, import_mysql_core.decimal)("depositAmount", { precision: 10, scale: 2 }),
      status: (0, import_mysql_core.mysqlEnum)("status", ["waiting", "matched", "passed", "refunded"]).default("waiting").notNull(),
      dateAdded: (0, import_mysql_core.date)("dateAdded"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    boardingReservations = (0, import_mysql_core.mysqlTable)("boarding_reservations", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId"),
      checkInDate: (0, import_mysql_core.timestamp)("checkInDate").notNull(),
      checkOutDate: (0, import_mysql_core.timestamp)("checkOutDate"),
      kennelNumber: (0, import_mysql_core.varchar)("kennelNumber", { length: 32 }),
      status: (0, import_mysql_core.mysqlEnum)("status", ["upcoming", "active", "completed", "cancelled"]).default("upcoming").notNull(),
      specialInstructions: (0, import_mysql_core.text)("specialInstructions"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    boardingDailyLogs = (0, import_mysql_core.mysqlTable)("boarding_daily_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      reservationId: (0, import_mysql_core.int)("reservationId").notNull(),
      logDate: (0, import_mysql_core.date)("logDate").notNull(),
      staffId: (0, import_mysql_core.int)("staffId"),
      ateMorning: (0, import_mysql_core.boolean)("ateMorning").default(false),
      ateEvening: (0, import_mysql_core.boolean)("ateEvening").default(false),
      medicationGiven: (0, import_mysql_core.boolean)("medicationGiven").default(false),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    invoices = (0, import_mysql_core.mysqlTable)("invoices", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      squareInvoiceId: (0, import_mysql_core.varchar)("squareInvoiceId", { length: 128 }),
      squarePaymentLinkId: (0, import_mysql_core.varchar)("squarePaymentLinkId", { length: 128 }),
      squarePaymentLinkUrl: (0, import_mysql_core.text)("squarePaymentLinkUrl"),
      squareOrderId: (0, import_mysql_core.varchar)("squareOrderId", { length: 128 }),
      amount: (0, import_mysql_core.decimal)("amount", { precision: 10, scale: 2 }).notNull(),
      description: (0, import_mysql_core.text)("description"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["draft", "sent", "paid", "overdue", "cancelled"]).default("draft").notNull(),
      dueDate: (0, import_mysql_core.date)("dueDate"),
      paidAt: (0, import_mysql_core.timestamp)("paidAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    contracts = (0, import_mysql_core.mysqlTable)("contracts", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      dogId: (0, import_mysql_core.int)("dogId"),
      type: (0, import_mysql_core.mysqlEnum)("type", ["training", "boarding", "puppy_sale", "other"]).default("training").notNull(),
      documentUrl: (0, import_mysql_core.text)("documentUrl"),
      signedAt: (0, import_mysql_core.timestamp)("signedAt"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "signed", "expired"]).default("pending").notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    media = (0, import_mysql_core.mysqlTable)("media", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      entityType: (0, import_mysql_core.mysqlEnum)("entityType", ["dog", "client", "puppy", "appointment", "litter"]).notNull(),
      entityId: (0, import_mysql_core.int)("entityId").notNull(),
      fileUrl: (0, import_mysql_core.text)("fileUrl").notNull(),
      fileType: (0, import_mysql_core.varchar)("fileType", { length: 64 }),
      isClientVisible: (0, import_mysql_core.boolean)("isClientVisible").default(true),
      uploadedAt: (0, import_mysql_core.timestamp)("uploadedAt").defaultNow().notNull()
    });
    inventory = (0, import_mysql_core.mysqlTable)("inventory", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      itemName: (0, import_mysql_core.varchar)("itemName", { length: 256 }).notNull(),
      category: (0, import_mysql_core.mysqlEnum)("category", ["food", "treats", "supplements", "supplies", "meds"]).default("supplies").notNull(),
      quantity: (0, import_mysql_core.decimal)("quantity", { precision: 10, scale: 2 }).default("0"),
      unit: (0, import_mysql_core.varchar)("unit", { length: 32 }),
      lowStockThreshold: (0, import_mysql_core.decimal)("lowStockThreshold", { precision: 10, scale: 2 }),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    timeEntries = (0, import_mysql_core.mysqlTable)("time_entries", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      staffId: (0, import_mysql_core.int)("staffId").notNull(),
      clockIn: (0, import_mysql_core.timestamp)("clockIn").notNull(),
      clockOut: (0, import_mysql_core.timestamp)("clockOut"),
      totalHours: (0, import_mysql_core.decimal)("totalHours", { precision: 6, scale: 2 }),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    bridgingSessions = (0, import_mysql_core.mysqlTable)("bridging_sessions", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId"),
      type: (0, import_mysql_core.mysqlEnum)("type", ["classroom", "go_home", "custom"]).notNull(),
      title: (0, import_mysql_core.varchar)("title", { length: 256 }).notNull(),
      description: (0, import_mysql_core.text)("description"),
      scheduledAt: (0, import_mysql_core.timestamp)("scheduledAt"),
      completedAt: (0, import_mysql_core.timestamp)("completedAt"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "scheduled", "completed", "cancelled"]).default("pending").notNull(),
      sortOrder: (0, import_mysql_core.int)("sortOrder").default(0).notNull(),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    ebookAccess = (0, import_mysql_core.mysqlTable)("ebook_access", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId"),
      ebookKey: (0, import_mysql_core.varchar)("ebookKey", { length: 64 }).notNull(),
      // "chapter1_fundamentals" or "nothing_in_life_is_free"
      bridgingSessionId: (0, import_mysql_core.int)("bridgingSessionId"),
      unlockedAt: (0, import_mysql_core.timestamp)("unlockedAt").defaultNow().notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    messages = (0, import_mysql_core.mysqlTable)("messages", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      senderType: (0, import_mysql_core.mysqlEnum)("senderType", ["client", "staff"]).notNull(),
      senderUserId: (0, import_mysql_core.int)("senderUserId"),
      content: (0, import_mysql_core.text)("content").notNull(),
      readAt: (0, import_mysql_core.timestamp)("readAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    pushTokens = (0, import_mysql_core.mysqlTable)("push_tokens", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      userId: (0, import_mysql_core.int)("userId").notNull(),
      token: (0, import_mysql_core.varchar)("token", { length: 256 }).notNull(),
      platform: (0, import_mysql_core.mysqlEnum)("platform", ["ios", "android", "web"]).default("ios").notNull(),
      isActive: (0, import_mysql_core.boolean)("isActive").default(true).notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    notificationSchedules = (0, import_mysql_core.mysqlTable)("notification_schedules", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      type: (0, import_mysql_core.mysqlEnum)("type", ["payment_reminder", "bridging_reminder", "health_record_reminder", "general"]).notNull(),
      referenceType: (0, import_mysql_core.mysqlEnum)("referenceType", ["invoice", "bridging_session", "appointment", "health_record"]),
      referenceId: (0, import_mysql_core.int)("referenceId"),
      title: (0, import_mysql_core.varchar)("title", { length: 256 }).notNull(),
      body: (0, import_mysql_core.text)("body").notNull(),
      scheduledFor: (0, import_mysql_core.timestamp)("scheduledFor").notNull(),
      sentAt: (0, import_mysql_core.timestamp)("sentAt"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "sent", "failed", "cancelled"]).default("pending").notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    healthRecords = (0, import_mysql_core.mysqlTable)("health_records", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      type: (0, import_mysql_core.mysqlEnum)("type", ["vaccine", "fecal", "vet_exam", "other"]).notNull(),
      title: (0, import_mysql_core.varchar)("title", { length: 256 }).notNull(),
      description: (0, import_mysql_core.text)("description"),
      documentUrl: (0, import_mysql_core.text)("documentUrl"),
      recordDate: (0, import_mysql_core.date)("recordDate"),
      // date the record was issued (e.g. fecal test date)
      expiresAt: (0, import_mysql_core.date)("expiresAt"),
      // when the record expires (fecal = recordDate + 7 days)
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "submitted", "approved", "rejected", "expired"]).default("pending").notNull(),
      reviewNotes: (0, import_mysql_core.text)("reviewNotes"),
      reviewedBy: (0, import_mysql_core.int)("reviewedBy"),
      reviewedAt: (0, import_mysql_core.timestamp)("reviewedAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    intakeRequirements = (0, import_mysql_core.mysqlTable)("intake_requirements", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      intakeDate: (0, import_mysql_core.date)("intakeDate").notNull(),
      requireVaccines: (0, import_mysql_core.boolean)("requireVaccines").default(true).notNull(),
      requireFecal: (0, import_mysql_core.boolean)("requireFecal").default(true).notNull(),
      vaccineStatus: (0, import_mysql_core.mysqlEnum)("vaccineStatus", ["pending", "submitted", "approved", "rejected"]).default("pending").notNull(),
      fecalStatus: (0, import_mysql_core.mysqlEnum)("fecalStatus", ["pending", "submitted", "approved", "rejected"]).default("pending").notNull(),
      allCleared: (0, import_mysql_core.boolean)("allCleared").default(false).notNull(),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    staffMembers = (0, import_mysql_core.mysqlTable)("staff_members", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      userId: (0, import_mysql_core.int)("userId"),
      firstName: (0, import_mysql_core.varchar)("firstName", { length: 128 }).notNull(),
      lastName: (0, import_mysql_core.varchar)("lastName", { length: 128 }).notNull(),
      email: (0, import_mysql_core.varchar)("email", { length: 320 }),
      phone: (0, import_mysql_core.varchar)("phone", { length: 32 }),
      role: (0, import_mysql_core.mysqlEnum)("role", ["owner", "admin", "manager", "trainer", "kennel_tech", "front_desk"]).default("trainer").notNull(),
      photoUrl: (0, import_mysql_core.text)("photoUrl"),
      isActive: (0, import_mysql_core.boolean)("isActive").default(true).notNull(),
      specialties: (0, import_mysql_core.json)("specialties").$type(),
      notes: (0, import_mysql_core.text)("notes"),
      // Pay configuration
      payType: (0, import_mysql_core.mysqlEnum)("payType", ["hourly", "salary", "commission"]).default("hourly").notNull(),
      hourlyRate: (0, import_mysql_core.decimal)("hourlyRate", { precision: 8, scale: 2 }).default("15.00"),
      salary: (0, import_mysql_core.decimal)("salary", { precision: 10, scale: 2 }),
      commissionRate: (0, import_mysql_core.decimal)("commissionRate", { precision: 5, scale: 2 }),
      // Granular permissions (JSON object)
      permissions: (0, import_mysql_core.json)("permissions").$type(),
      // Invite status
      inviteStatus: (0, import_mysql_core.mysqlEnum)("inviteStatus", ["pending", "accepted", "expired"]).default("accepted"),
      inviteEmail: (0, import_mysql_core.varchar)("inviteEmail", { length: 320 }),
      invitedAt: (0, import_mysql_core.timestamp)("invitedAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    DEFAULT_PERMISSIONS = {
      owner: { clients: true, dogs: true, training: true, breeding: true, boarding: true, scheduling: true, timeTracking: true, invoices: true, inventory: true, reports: true, staffManagement: true, integrations: true, settings: true },
      admin: { clients: true, dogs: true, training: true, breeding: true, boarding: true, scheduling: true, timeTracking: true, invoices: true, inventory: true, reports: true, staffManagement: true, integrations: true, settings: true },
      manager: { clients: true, dogs: true, training: true, breeding: true, boarding: true, scheduling: true, timeTracking: true, invoices: true, inventory: true, reports: true, staffManagement: false, integrations: false, settings: false },
      trainer: { clients: true, dogs: true, training: true, breeding: false, boarding: false, scheduling: true, timeTracking: true, invoices: false, inventory: false, reports: false, staffManagement: false, integrations: false, settings: false },
      kennel_tech: { clients: false, dogs: true, training: false, breeding: true, boarding: true, scheduling: true, timeTracking: true, invoices: false, inventory: true, reports: false, staffManagement: false, integrations: false, settings: false },
      front_desk: { clients: true, dogs: true, training: false, breeding: false, boarding: true, scheduling: true, timeTracking: true, invoices: true, inventory: false, reports: false, staffManagement: false, integrations: false, settings: false }
    };
    staffPayHistory = (0, import_mysql_core.mysqlTable)("staff_pay_history", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      staffId: (0, import_mysql_core.int)("staffId").notNull(),
      payType: (0, import_mysql_core.mysqlEnum)("payType", ["hourly", "salary", "commission"]).notNull(),
      hourlyRate: (0, import_mysql_core.decimal)("hourlyRate", { precision: 8, scale: 2 }),
      salary: (0, import_mysql_core.decimal)("salary", { precision: 10, scale: 2 }),
      commissionRate: (0, import_mysql_core.decimal)("commissionRate", { precision: 5, scale: 2 }),
      effectiveDate: (0, import_mysql_core.timestamp)("effectiveDate").defaultNow().notNull(),
      changedBy: (0, import_mysql_core.int)("changedBy"),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    staffDogAssignments = (0, import_mysql_core.mysqlTable)("staff_dog_assignments", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      staffId: (0, import_mysql_core.int)("staffId").notNull(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      role: (0, import_mysql_core.mysqlEnum)("role", ["primary_trainer", "backup_trainer", "kennel_tech"]).default("primary_trainer").notNull(),
      assignedAt: (0, import_mysql_core.timestamp)("assignedAt").defaultNow().notNull()
    });
    trainingMedia = (0, import_mysql_core.mysqlTable)("training_media", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      trainingLogId: (0, import_mysql_core.int)("trainingLogId").notNull(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      fileUrl: (0, import_mysql_core.text)("fileUrl").notNull(),
      thumbnailUrl: (0, import_mysql_core.text)("thumbnailUrl"),
      fileType: (0, import_mysql_core.mysqlEnum)("fileType", ["photo", "video"]).default("photo").notNull(),
      caption: (0, import_mysql_core.text)("caption"),
      isClientVisible: (0, import_mysql_core.boolean)("isClientVisible").default(true).notNull(),
      uploadedBy: (0, import_mysql_core.int)("uploadedBy"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    clientOnboarding = (0, import_mysql_core.mysqlTable)("client_onboarding", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      dogId: (0, import_mysql_core.int)("dogId"),
      status: (0, import_mysql_core.mysqlEnum)("status", ["not_started", "in_progress", "completed"]).default("not_started").notNull(),
      step1InfoConfirmed: (0, import_mysql_core.boolean)("step1InfoConfirmed").default(false).notNull(),
      step2ContractSigned: (0, import_mysql_core.boolean)("step2ContractSigned").default(false).notNull(),
      step3HealthSubmitted: (0, import_mysql_core.boolean)("step3HealthSubmitted").default(false).notNull(),
      step4BridgingScheduled: (0, import_mysql_core.boolean)("step4BridgingScheduled").default(false).notNull(),
      step5Complete: (0, import_mysql_core.boolean)("step5Complete").default(false).notNull(),
      contractId: (0, import_mysql_core.int)("contractId"),
      intakeRequirementId: (0, import_mysql_core.int)("intakeRequirementId"),
      bridgingSessionId: (0, import_mysql_core.int)("bridgingSessionId"),
      completedAt: (0, import_mysql_core.timestamp)("completedAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    dogFeedingInfo = (0, import_mysql_core.mysqlTable)("dog_feeding_info", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      foodBrand: (0, import_mysql_core.varchar)("foodBrand", { length: 256 }),
      foodType: (0, import_mysql_core.varchar)("foodType", { length: 128 }),
      amountPerMeal: (0, import_mysql_core.varchar)("amountPerMeal", { length: 128 }),
      mealsPerDay: (0, import_mysql_core.int)("mealsPerDay"),
      feedingSchedule: (0, import_mysql_core.varchar)("feedingSchedule", { length: 256 }),
      allergies: (0, import_mysql_core.text)("allergies"),
      specialInstructions: (0, import_mysql_core.text)("specialInstructions"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    dogMedications = (0, import_mysql_core.mysqlTable)("dog_medications", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      name: (0, import_mysql_core.varchar)("name", { length: 256 }).notNull(),
      dosage: (0, import_mysql_core.varchar)("dosage", { length: 128 }),
      frequency: (0, import_mysql_core.varchar)("frequency", { length: 128 }),
      startDate: (0, import_mysql_core.date)("startDate"),
      endDate: (0, import_mysql_core.date)("endDate"),
      prescribedBy: (0, import_mysql_core.varchar)("prescribedBy", { length: 256 }),
      isActive: (0, import_mysql_core.boolean)("isActive").default(true).notNull(),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    leadFollowupSequences = (0, import_mysql_core.mysqlTable)("lead_followup_sequences", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      name: (0, import_mysql_core.varchar)("name", { length: 256 }).notNull(),
      description: (0, import_mysql_core.text)("description"),
      isActive: (0, import_mysql_core.boolean)("isActive").default(true).notNull(),
      triggerSource: (0, import_mysql_core.mysqlEnum)("triggerSource", ["meta", "wix", "referral", "website", "other", "all"]).default("all").notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    leadFollowupSteps = (0, import_mysql_core.mysqlTable)("lead_followup_steps", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      sequenceId: (0, import_mysql_core.int)("sequenceId").notNull(),
      stepOrder: (0, import_mysql_core.int)("stepOrder").notNull(),
      delayMinutes: (0, import_mysql_core.int)("delayMinutes").notNull(),
      // delay from lead creation (0 = immediate)
      messageTemplate: (0, import_mysql_core.text)("messageTemplate").notNull(),
      // supports {{firstName}}, {{dogName}}, etc.
      channel: (0, import_mysql_core.mysqlEnum)("channel", ["sms", "email"]).default("sms").notNull(),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    leadFollowupLogs = (0, import_mysql_core.mysqlTable)("lead_followup_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      sequenceId: (0, import_mysql_core.int)("sequenceId").notNull(),
      stepId: (0, import_mysql_core.int)("stepId").notNull(),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "sent", "failed", "cancelled"]).default("pending").notNull(),
      scheduledAt: (0, import_mysql_core.timestamp)("scheduledAt").notNull(),
      sentAt: (0, import_mysql_core.timestamp)("sentAt"),
      messageSid: (0, import_mysql_core.varchar)("messageSid", { length: 128 }),
      errorMessage: (0, import_mysql_core.text)("errorMessage"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    transactions = (0, import_mysql_core.mysqlTable)("transactions", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      invoiceId: (0, import_mysql_core.int)("invoiceId"),
      squarePaymentId: (0, import_mysql_core.varchar)("squarePaymentId", { length: 128 }),
      squareOrderId: (0, import_mysql_core.varchar)("squareOrderId", { length: 128 }),
      amount: (0, import_mysql_core.decimal)("amount", { precision: 10, scale: 2 }).notNull(),
      type: (0, import_mysql_core.mysqlEnum)("type", ["payment_link", "pos", "invoice_payment", "manual", "refund"]).default("manual").notNull(),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "completed", "failed", "refunded"]).default("pending").notNull(),
      description: (0, import_mysql_core.text)("description"),
      paymentMethod: (0, import_mysql_core.varchar)("paymentMethod", { length: 64 }),
      paidAt: (0, import_mysql_core.timestamp)("paidAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    expenses = (0, import_mysql_core.mysqlTable)("expenses", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      category: (0, import_mysql_core.mysqlEnum)("category", ["rent", "supplies", "vet_fees", "utilities", "insurance", "marketing", "food", "equipment", "maintenance", "other"]).default("other").notNull(),
      amount: (0, import_mysql_core.decimal)("amount", { precision: 10, scale: 2 }).notNull(),
      date: (0, import_mysql_core.date)("date").notNull(),
      vendor: (0, import_mysql_core.varchar)("vendor", { length: 256 }),
      description: (0, import_mysql_core.text)("description"),
      isRecurring: (0, import_mysql_core.boolean)("isRecurring").default(false).notNull(),
      recurringFrequency: (0, import_mysql_core.mysqlEnum)("recurringFrequency", ["weekly", "biweekly", "monthly", "quarterly", "yearly"]),
      receiptUrl: (0, import_mysql_core.text)("receiptUrl"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    staffInvitations = (0, import_mysql_core.mysqlTable)("staff_invitations", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      staffId: (0, import_mysql_core.int)("staffId").notNull(),
      email: (0, import_mysql_core.varchar)("email", { length: 320 }).notNull(),
      token: (0, import_mysql_core.varchar)("token", { length: 128 }).notNull(),
      status: (0, import_mysql_core.mysqlEnum)("status", ["pending", "accepted", "expired", "revoked"]).default("pending").notNull(),
      expiresAt: (0, import_mysql_core.timestamp)("expiresAt").notNull(),
      acceptedAt: (0, import_mysql_core.timestamp)("acceptedAt"),
      acceptedByUserId: (0, import_mysql_core.int)("acceptedByUserId"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    dogDailyLogs = (0, import_mysql_core.mysqlTable)("dog_daily_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      dogId: (0, import_mysql_core.int)("dogId").notNull(),
      logDate: (0, import_mysql_core.date)("logDate").notNull(),
      staffId: (0, import_mysql_core.int)("staffId"),
      // who filled it out
      // --- Potty Rotation ---
      pottyMorning: (0, import_mysql_core.boolean)("pottyMorning").default(false).notNull(),
      pottyMidday: (0, import_mysql_core.boolean)("pottyMidday").default(false).notNull(),
      pottyEvening: (0, import_mysql_core.boolean)("pottyEvening").default(false).notNull(),
      pottyFinal: (0, import_mysql_core.boolean)("pottyFinal").default(false).notNull(),
      pottyNotes: (0, import_mysql_core.text)("pottyNotes"),
      // --- Feeding ---
      feedingCompleted: (0, import_mysql_core.boolean)("feedingCompleted").default(false).notNull(),
      feedingFoodType: (0, import_mysql_core.varchar)("feedingFoodType", { length: 256 }),
      feedingAmount: (0, import_mysql_core.varchar)("feedingAmount", { length: 128 }),
      feedingSupplements: (0, import_mysql_core.boolean)("feedingSupplements").default(false).notNull(),
      feedingConsumed: (0, import_mysql_core.mysqlEnum)("feedingConsumed", ["full", "partial", "refused"]),
      feedingNotes: (0, import_mysql_core.text)("feedingNotes"),
      // --- Medication ---
      medicationGiven: (0, import_mysql_core.boolean)("medicationGiven").default(false).notNull(),
      medicationTime: (0, import_mysql_core.varchar)("medicationTime", { length: 32 }),
      medicationNotes: (0, import_mysql_core.text)("medicationNotes"),
      // --- Activity (Treadmill) ---
      activityCompleted: (0, import_mysql_core.boolean)("activityCompleted").default(false).notNull(),
      activityDuration: (0, import_mysql_core.int)("activityDuration"),
      // minutes
      activitySpeed: (0, import_mysql_core.varchar)("activitySpeed", { length: 64 }),
      activityNotes: (0, import_mysql_core.text)("activityNotes"),
      // --- Training / Public Exposure ---
      trainingCompleted: (0, import_mysql_core.boolean)("trainingCompleted").default(false).notNull(),
      trainingLocation: (0, import_mysql_core.varchar)("trainingLocation", { length: 256 }),
      trainingDuration: (0, import_mysql_core.varchar)("trainingDuration", { length: 64 }),
      trainingNotes: (0, import_mysql_core.text)("trainingNotes"),
      // --- Accident / Grooming ---
      accidentOccurred: (0, import_mysql_core.boolean)("accidentOccurred").default(false).notNull(),
      kennelCleaned: (0, import_mysql_core.boolean)("kennelCleaned").default(false).notNull(),
      groomingBath: (0, import_mysql_core.boolean)("groomingBath").default(false).notNull(),
      groomingBathDry: (0, import_mysql_core.boolean)("groomingBathDry").default(false).notNull(),
      groomingBathDryNails: (0, import_mysql_core.boolean)("groomingBathDryNails").default(false).notNull(),
      groomingEarCleaning: (0, import_mysql_core.boolean)("groomingEarCleaning").default(false).notNull(),
      groomingDeshed: (0, import_mysql_core.boolean)("groomingDeshed").default(false).notNull(),
      groomingDematting: (0, import_mysql_core.boolean)("groomingDematting").default(false).notNull(),
      accidentGroomingNotes: (0, import_mysql_core.text)("accidentGroomingNotes"),
      // --- Water & Check ---
      waterRefreshed: (0, import_mysql_core.boolean)("waterRefreshed").default(false).notNull(),
      kennelChecked: (0, import_mysql_core.boolean)("kennelChecked").default(false).notNull(),
      waterCheckNotes: (0, import_mysql_core.text)("waterCheckNotes"),
      // --- Media ---
      mediaUploaded: (0, import_mysql_core.boolean)("mediaUploaded").default(false).notNull(),
      clientUpdateSent: (0, import_mysql_core.boolean)("clientUpdateSent").default(false).notNull(),
      // --- Status ---
      statusAppetite: (0, import_mysql_core.mysqlEnum)("statusAppetite", ["good", "warning", "bad"]),
      statusBehavior: (0, import_mysql_core.mysqlEnum)("statusBehavior", ["good", "warning", "bad"]),
      statusHealth: (0, import_mysql_core.mysqlEnum)("statusHealth", ["good", "warning", "bad"]),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    facilityTasks = (0, import_mysql_core.mysqlTable)("facility_tasks", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      taskDate: (0, import_mysql_core.date)("taskDate").notNull(),
      staffId: (0, import_mysql_core.int)("staffId"),
      // who completed the tasks
      // Kennels
      kennelsWasteRemoved: (0, import_mysql_core.boolean)("kennelsWasteRemoved").default(false),
      kennelsSanitized: (0, import_mysql_core.boolean)("kennelsSanitized").default(false),
      kennelsDried: (0, import_mysql_core.boolean)("kennelsDried").default(false),
      // Floors
      floorsSweepVacuum: (0, import_mysql_core.boolean)("floorsSweepVacuum").default(false),
      floorsMop: (0, import_mysql_core.boolean)("floorsMop").default(false),
      floorsSurfacesWiped: (0, import_mysql_core.boolean)("floorsSurfacesWiped").default(false),
      floorsHighTouchDisinfected: (0, import_mysql_core.boolean)("floorsHighTouchDisinfected").default(false),
      // Laundry
      laundryCollected: (0, import_mysql_core.boolean)("laundryCollected").default(false),
      laundryBagged: (0, import_mysql_core.boolean)("laundryBagged").default(false),
      laundryToLaundromat: (0, import_mysql_core.boolean)("laundryToLaundromat").default(false),
      laundryFoldedRestocked: (0, import_mysql_core.boolean)("laundryFoldedRestocked").default(false),
      // Yard
      yardWastePickup: (0, import_mysql_core.boolean)("yardWastePickup").default(false),
      yardFenceCheck: (0, import_mysql_core.boolean)("yardFenceCheck").default(false),
      // Water
      waterHolesCleaned: (0, import_mysql_core.boolean)("waterHolesCleaned").default(false),
      waterKennelPails: (0, import_mysql_core.boolean)("waterKennelPails").default(false),
      // Food
      foodMealsPortioned: (0, import_mysql_core.boolean)("foodMealsPortioned").default(false),
      foodBowlsSanitized: (0, import_mysql_core.boolean)("foodBowlsSanitized").default(false),
      foodPrepAreaCleaned: (0, import_mysql_core.boolean)("foodPrepAreaCleaned").default(false),
      // Midday Check
      middayDogsChecked: (0, import_mysql_core.boolean)("middayDogsChecked").default(false),
      middayWaterRefreshed: (0, import_mysql_core.boolean)("middayWaterRefreshed").default(false),
      // Close-Out
      closeoutEcollarsRemoved: (0, import_mysql_core.boolean)("closeoutEcollarsRemoved").default(false),
      closeoutEcollarsPluggedIn: (0, import_mysql_core.boolean)("closeoutEcollarsPluggedIn").default(false),
      closeoutFinalPotty: (0, import_mysql_core.boolean)("closeoutFinalPotty").default(false),
      closeoutFeedingComplete: (0, import_mysql_core.boolean)("closeoutFeedingComplete").default(false),
      closeoutFinalKennelCheck: (0, import_mysql_core.boolean)("closeoutFinalKennelCheck").default(false),
      closeoutTrashOut: (0, import_mysql_core.boolean)("closeoutTrashOut").default(false),
      closeoutSecured: (0, import_mysql_core.boolean)("closeoutSecured").default(false),
      // Notes
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow()
    });
    googleCalendarTokens = (0, import_mysql_core.mysqlTable)("google_calendar_tokens", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      userId: (0, import_mysql_core.int)("userId").notNull(),
      accessToken: (0, import_mysql_core.text)("accessToken").notNull(),
      refreshToken: (0, import_mysql_core.text)("refreshToken"),
      expiresAt: (0, import_mysql_core.timestamp)("expiresAt"),
      calendarId: (0, import_mysql_core.varchar)("calendarId", { length: 320 }).default("primary"),
      syncEnabled: (0, import_mysql_core.boolean)("syncEnabled").default(true),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    puppyDailyLogs = (0, import_mysql_core.mysqlTable)("puppy_daily_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      puppyId: (0, import_mysql_core.int)("puppyId").notNull(),
      litterId: (0, import_mysql_core.int)("litterId").notNull(),
      logDate: (0, import_mysql_core.date)("logDate").notNull(),
      weightGrams: (0, import_mysql_core.decimal)("weightGrams", { precision: 8, scale: 2 }),
      nursingQuality: (0, import_mysql_core.mysqlEnum)("nursingQuality", ["strong", "normal", "weak", "not_nursing", "na"]).default("na"),
      appetite: (0, import_mysql_core.mysqlEnum)("appetite", ["excellent", "normal", "poor", "refused", "na"]).default("na"),
      stool: (0, import_mysql_core.mysqlEnum)("stool", ["normal", "loose", "diarrhea", "none_observed", "na"]).default("na"),
      urine: (0, import_mysql_core.mysqlEnum)("urine", ["normal", "none_observed", "na"]).default("na"),
      temperatureStatus: (0, import_mysql_core.mysqlEnum)("temperatureStatus", ["normal", "cool", "cold", "overheated", "not_checked"]).default("not_checked"),
      energyLevel: (0, import_mysql_core.mysqlEnum)("energyLevel", ["normal", "quiet", "lethargic", "hyperactive", "not_checked"]).default("not_checked"),
      interventionNeeded: (0, import_mysql_core.boolean)("interventionNeeded").default(false),
      interventionNotes: (0, import_mysql_core.text)("interventionNotes"),
      notes: (0, import_mysql_core.text)("notes"),
      loggedBy: (0, import_mysql_core.int)("loggedBy"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    }, (table) => [
      (0, import_mysql_core.uniqueIndex)("puppy_daily_logs_unique").on(table.puppyId, table.logDate)
    ]);
    litterDailyLogs = (0, import_mysql_core.mysqlTable)("litter_daily_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId").notNull(),
      logDate: (0, import_mysql_core.date)("logDate").notNull(),
      ageDays: (0, import_mysql_core.int)("ageDays"),
      damAppetite: (0, import_mysql_core.text)("damAppetite"),
      damBehavior: (0, import_mysql_core.text)("damBehavior"),
      damHealthNotes: (0, import_mysql_core.text)("damHealthNotes"),
      environmentNotes: (0, import_mysql_core.text)("environmentNotes"),
      cleaningCompleted: (0, import_mysql_core.boolean)("cleaningCompleted").default(false),
      beddingChanged: (0, import_mysql_core.boolean)("beddingChanged").default(false),
      overallLitterNotes: (0, import_mysql_core.text)("overallLitterNotes"),
      loggedBy: (0, import_mysql_core.int)("loggedBy"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    }, (table) => [
      (0, import_mysql_core.uniqueIndex)("litter_daily_logs_unique").on(table.litterId, table.logDate)
    ]);
    taskTemplates = (0, import_mysql_core.mysqlTable)("task_templates", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      stageName: (0, import_mysql_core.varchar)("stageName", { length: 256 }).notNull(),
      startDay: (0, import_mysql_core.int)("startDay").notNull(),
      endDay: (0, import_mysql_core.int)("endDay").notNull(),
      taskTitle: (0, import_mysql_core.varchar)("taskTitle", { length: 512 }).notNull(),
      taskDescription: (0, import_mysql_core.text)("taskDescription"),
      category: (0, import_mysql_core.mysqlEnum)("category", ["whelping", "feeding", "cleaning", "health", "curriculum", "evaluation", "go_home", "admin", "dam_care"]),
      appliesTo: (0, import_mysql_core.mysqlEnum)("appliesTo", ["litter", "puppy", "dam"]).default("litter"),
      priority: (0, import_mysql_core.mysqlEnum)("taskPriority", ["low", "normal", "high", "urgent"]).default("normal"),
      defaultDueTime: (0, import_mysql_core.time)("defaultDueTime"),
      active: (0, import_mysql_core.boolean)("active").default(true),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    breedingDailyTasks = (0, import_mysql_core.mysqlTable)("breeding_daily_tasks", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId"),
      puppyId: (0, import_mysql_core.int)("puppyId"),
      templateId: (0, import_mysql_core.int)("templateId"),
      taskDate: (0, import_mysql_core.date)("taskDate").notNull(),
      title: (0, import_mysql_core.varchar)("title", { length: 512 }).notNull(),
      description: (0, import_mysql_core.text)("description"),
      category: (0, import_mysql_core.varchar)("category", { length: 64 }),
      priority: (0, import_mysql_core.mysqlEnum)("dailyTaskPriority", ["low", "normal", "high", "urgent"]).default("normal"),
      assignedTo: (0, import_mysql_core.int)("assignedTo"),
      dueTime: (0, import_mysql_core.time)("dueTime"),
      completed: (0, import_mysql_core.boolean)("completed").default(false),
      completedBy: (0, import_mysql_core.int)("completedBy"),
      completedAt: (0, import_mysql_core.timestamp)("completedAt"),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    breedingFlags = (0, import_mysql_core.mysqlTable)("breeding_flags", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      name: (0, import_mysql_core.varchar)("name", { length: 256 }).notNull(),
      category: (0, import_mysql_core.mysqlEnum)("flagCategory", ["health", "behavior", "handling", "admin", "placement"]),
      severity: (0, import_mysql_core.mysqlEnum)("severity", ["info", "watch", "warning", "critical"]).default("watch"),
      description: (0, import_mysql_core.text)("description"),
      active: (0, import_mysql_core.boolean)("active").default(true)
    });
    puppyFlags = (0, import_mysql_core.mysqlTable)("puppy_flags", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      puppyId: (0, import_mysql_core.int)("puppyId").notNull(),
      flagId: (0, import_mysql_core.int)("flagId").notNull(),
      status: (0, import_mysql_core.mysqlEnum)("puppyFlagStatus", ["active", "resolved"]).default("active"),
      notes: (0, import_mysql_core.text)("notes"),
      createdBy: (0, import_mysql_core.int)("createdBy"),
      resolvedBy: (0, import_mysql_core.int)("resolvedBy"),
      resolvedAt: (0, import_mysql_core.timestamp)("resolvedAt"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    curriculumLogs = (0, import_mysql_core.mysqlTable)("curriculum_logs", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId"),
      puppyId: (0, import_mysql_core.int)("puppyId"),
      logDate: (0, import_mysql_core.date)("logDate").notNull(),
      category: (0, import_mysql_core.varchar)("category", { length: 128 }),
      activity: (0, import_mysql_core.varchar)("activity", { length: 512 }).notNull(),
      completed: (0, import_mysql_core.boolean)("completed").default(true),
      response: (0, import_mysql_core.mysqlEnum)("response", ["confident", "curious", "neutral", "hesitant", "fearful", "not_applicable"]).default("not_applicable"),
      recoveryTime: (0, import_mysql_core.mysqlEnum)("recoveryTime", ["immediate", "under_5_seconds", "5_15_seconds", "15_30_seconds", "over_30_seconds", "not_applicable"]).default("not_applicable"),
      notes: (0, import_mysql_core.text)("notes"),
      loggedBy: (0, import_mysql_core.int)("loggedBy"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    breedingHealthEvents = (0, import_mysql_core.mysqlTable)("breeding_health_events", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId"),
      puppyId: (0, import_mysql_core.int)("puppyId"),
      dogId: (0, import_mysql_core.int)("dogId"),
      eventDate: (0, import_mysql_core.date)("eventDate").notNull(),
      eventType: (0, import_mysql_core.mysqlEnum)("eventType", ["deworming", "vaccine", "vet_exam", "medication", "injury", "illness", "intervention", "death", "other"]),
      productOrMedication: (0, import_mysql_core.varchar)("productOrMedication", { length: 512 }),
      dose: (0, import_mysql_core.varchar)("dose", { length: 128 }),
      route: (0, import_mysql_core.varchar)("route", { length: 128 }),
      administeredBy: (0, import_mysql_core.int)("administeredBy"),
      vetClinic: (0, import_mysql_core.varchar)("vetClinic", { length: 256 }),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    evaluations = (0, import_mysql_core.mysqlTable)("evaluations", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      puppyId: (0, import_mysql_core.int)("puppyId").notNull(),
      litterId: (0, import_mysql_core.int)("litterId"),
      evaluationDate: (0, import_mysql_core.date)("evaluationDate").notNull(),
      evaluatorId: (0, import_mysql_core.int)("evaluatorId"),
      overallRecommendation: (0, import_mysql_core.text)("overallRecommendation"),
      placementType: (0, import_mysql_core.mysqlEnum)("placementType", [
        "pet_companion",
        "sport_prospect",
        "working_prospect",
        "personal_protection_prospect",
        "service_prospect",
        "therapy_facility_prospect",
        "breeding_prospect",
        "not_working_home"
      ]),
      strengths: (0, import_mysql_core.text)("strengths"),
      concerns: (0, import_mysql_core.text)("concerns"),
      buyerMatchNotes: (0, import_mysql_core.text)("buyerMatchNotes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    evaluationScores = (0, import_mysql_core.mysqlTable)("evaluation_scores", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      evaluationId: (0, import_mysql_core.int)("evaluationId").notNull(),
      category: (0, import_mysql_core.varchar)("category", { length: 128 }).notNull(),
      score: (0, import_mysql_core.int)("score"),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    puppyMatches = (0, import_mysql_core.mysqlTable)("puppy_matches", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      puppyId: (0, import_mysql_core.int)("puppyId").notNull(),
      clientId: (0, import_mysql_core.int)("clientId").notNull(),
      matchStatus: (0, import_mysql_core.mysqlEnum)("matchStatus", ["potential", "recommended", "approved", "client_accepted", "declined"]).default("potential"),
      reasonForMatch: (0, import_mysql_core.text)("reasonForMatch"),
      concerns: (0, import_mysql_core.text)("concerns"),
      approvedBy: (0, import_mysql_core.int)("approvedBy"),
      clientCommunicationSent: (0, import_mysql_core.boolean)("clientCommunicationSent").default(false),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    goHomeChecklists = (0, import_mysql_core.mysqlTable)("go_home_checklists", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      puppyId: (0, import_mysql_core.int)("puppyId").notNull(),
      litterId: (0, import_mysql_core.int)("litterId"),
      finalVetExamComplete: (0, import_mysql_core.boolean)("finalVetExamComplete").default(false),
      vaccinesComplete: (0, import_mysql_core.boolean)("vaccinesComplete").default(false),
      dewormingComplete: (0, import_mysql_core.boolean)("dewormingComplete").default(false),
      microchipEntered: (0, import_mysql_core.boolean)("microchipEntered").default(false),
      contractSigned: (0, import_mysql_core.boolean)("contractSigned").default(false),
      invoicePaid: (0, import_mysql_core.boolean)("invoicePaid").default(false),
      buyerPacketPrepared: (0, import_mysql_core.boolean)("buyerPacketPrepared").default(false),
      foodSentHome: (0, import_mysql_core.boolean)("foodSentHome").default(false),
      careInstructionsSent: (0, import_mysql_core.boolean)("careInstructionsSent").default(false),
      pickupScheduled: (0, import_mysql_core.boolean)("pickupScheduled").default(false),
      finalPhotoVideoSent: (0, import_mysql_core.boolean)("finalPhotoVideoSent").default(false),
      finalConditionCheckComplete: (0, import_mysql_core.boolean)("finalConditionCheckComplete").default(false),
      pickupDate: (0, import_mysql_core.date)("pickupDate"),
      pickupTime: (0, import_mysql_core.time)("pickupTime"),
      releasedTo: (0, import_mysql_core.varchar)("releasedTo", { length: 256 }),
      ownerAcknowledgment: (0, import_mysql_core.boolean)("ownerAcknowledgment").default(false),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    });
    breedingMediaFiles = (0, import_mysql_core.mysqlTable)("breeding_media_files", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      litterId: (0, import_mysql_core.int)("litterId"),
      puppyId: (0, import_mysql_core.int)("puppyId"),
      evaluationId: (0, import_mysql_core.int)("evaluationId"),
      healthEventId: (0, import_mysql_core.int)("healthEventId"),
      fileUrl: (0, import_mysql_core.text)("fileUrl").notNull(),
      fileType: (0, import_mysql_core.mysqlEnum)("fileType", ["photo", "video", "document"]).default("photo"),
      caption: (0, import_mysql_core.text)("caption"),
      uploadedBy: (0, import_mysql_core.int)("uploadedBy"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull()
    });
    payrollPayments = (0, import_mysql_core.mysqlTable)("payroll_payments", {
      id: (0, import_mysql_core.int)("id").autoincrement().primaryKey(),
      staffId: (0, import_mysql_core.int)("staffId").notNull(),
      periodStart: (0, import_mysql_core.date)("periodStart").notNull(),
      periodEnd: (0, import_mysql_core.date)("periodEnd").notNull(),
      paidAt: (0, import_mysql_core.timestamp)("paidAt"),
      paidBy: (0, import_mysql_core.int)("paidBy"),
      notes: (0, import_mysql_core.text)("notes"),
      createdAt: (0, import_mysql_core.timestamp)("createdAt").defaultNow().notNull(),
      updatedAt: (0, import_mysql_core.timestamp)("updatedAt").defaultNow().onUpdateNow().notNull()
    }, (table) => [
      (0, import_mysql_core.uniqueIndex)("payroll_payments_unique").on(table.staffId, table.periodStart)
    ]);
  }
});

// server/_core/env.ts
var ENV;
var init_env = __esm({
  "server/_core/env.ts"() {
    "use strict";
    ENV = {
      appId: process.env.VITE_APP_ID ?? "",
      cookieSecret: process.env.JWT_SECRET ?? "",
      databaseUrl: process.env.DATABASE_URL ?? "",
      oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
      ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
      isProduction: process.env.NODE_ENV === "production",
      forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
      forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? ""
    };
  }
});

// server/db.ts
async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = (0, import_mysql2.drizzle)(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}
async function upsertUser(user) {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }
  try {
    const values = {
      openId: user.openId
    };
    const updateSet = {};
    const textFields = ["name", "email", "loginMethod"];
    const assignNullable = (field) => {
      const value = user[field];
      if (value === void 0) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== void 0) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== void 0) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }
    if (!values.lastSignedIn) {
      values.lastSignedIn = /* @__PURE__ */ new Date();
    }
    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = /* @__PURE__ */ new Date();
    }
    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}
async function getUserByOpenId(openId) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return void 0;
  }
  const result = await db.select().from(users).where((0, import_drizzle_orm.eq)(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : void 0;
}
var import_drizzle_orm, import_mysql2, _db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    import_drizzle_orm = require("drizzle-orm");
    import_mysql2 = require("drizzle-orm/mysql2");
    init_schema();
    init_env();
    _db = null;
  }
});

// server/queries.ts
var queries_exports = {};
__export(queries_exports, {
  acceptStaffInvitation: () => acceptStaffInvitation,
  assignDogToStaff: () => assignDogToStaff,
  batchDeleteClients: () => batchDeleteClients,
  batchDeleteDogs: () => batchDeleteDogs,
  batchReassignDogTrainer: () => batchReassignDogTrainer,
  batchUpdateClientStatus: () => batchUpdateClientStatus,
  batchUpdateDogStatus: () => batchUpdateDogStatus,
  cancelFollowupLogsForClient: () => cancelFollowupLogsForClient,
  completeBridgingSession: () => completeBridgingSession,
  createAppointment: () => createAppointment,
  createBoardingDailyLog: () => createBoardingDailyLog,
  createBoardingReservation: () => createBoardingReservation,
  createBreedingCycle: () => createBreedingCycle,
  createBridgingSession: () => createBridgingSession,
  createClient: () => createClient,
  createClientComm: () => createClientComm,
  createClientOnboarding: () => createClientOnboarding,
  createContract: () => createContract,
  createDog: () => createDog,
  createDogLogPhoto: () => createDogLogPhoto,
  createDogMedication: () => createDogMedication,
  createExpense: () => createExpense,
  createFollowupLog: () => createFollowupLog,
  createFollowupSequence: () => createFollowupSequence,
  createFollowupStep: () => createFollowupStep,
  createHealthRecord: () => createHealthRecord,
  createIntakeRequirement: () => createIntakeRequirement,
  createInventoryItem: () => createInventoryItem,
  createInvoice: () => createInvoice,
  createLitter: () => createLitter,
  createMessage: () => createMessage,
  createNotificationSchedule: () => createNotificationSchedule,
  createPuppy: () => createPuppy,
  createStaffInvitation: () => createStaffInvitation,
  createStaffMember: () => createStaffMember,
  createTimeEntry: () => createTimeEntry,
  createTrainingLog: () => createTrainingLog,
  createTrainingMedia: () => createTrainingMedia,
  createTransaction: () => createTransaction,
  createWaitlistEntry: () => createWaitlistEntry,
  deleteAppointment: () => deleteAppointment,
  deleteDogDailyLog: () => deleteDogDailyLog,
  deleteDogLogPhoto: () => deleteDogLogPhoto,
  deleteDogMedication: () => deleteDogMedication,
  deleteExpense: () => deleteExpense,
  deleteFollowupSequence: () => deleteFollowupSequence,
  deleteFollowupStep: () => deleteFollowupStep,
  deleteTimeEntry: () => deleteTimeEntry,
  deleteTrainingMedia: () => deleteTrainingMedia,
  deleteTransaction: () => deleteTransaction,
  enqueueFollowupSequence: () => enqueueFollowupSequence,
  ensureOwnerStaffRecord: () => ensureOwnerStaffRecord,
  findClientByEmailOrPhone: () => findClientByEmailOrPhone,
  findInvoiceBySquareId: () => findInvoiceBySquareId,
  findTransactionBySquareOrderId: () => findTransactionBySquareOrderId,
  fullUpdateTimeEntry: () => fullUpdateTimeEntry,
  getActiveBoardingDogIds: () => getActiveBoardingDogIds,
  getActiveClockedIn: () => getActiveClockedIn,
  getActiveClockedInForStaff: () => getActiveClockedInForStaff,
  getActivePushTokens: () => getActivePushTokens,
  getAppointment: () => getAppointment,
  getBiweeklyPayrollSummary: () => getBiweeklyPayrollSummary,
  getBoardingReservation: () => getBoardingReservation,
  getBridgingSession: () => getBridgingSession,
  getClient: () => getClient,
  getClientFinancialSummary: () => getClientFinancialSummary,
  getClientOnboarding: () => getClientOnboarding,
  getClientPortalData: () => getClientPortalData,
  getDashboardStats: () => getDashboardStats,
  getDog: () => getDog,
  getDogDailyLog: () => getDogDailyLog,
  getDogFeedingInfo: () => getDogFeedingInfo,
  getFacilityTask: () => getFacilityTask,
  getFollowupSequence: () => getFollowupSequence,
  getHealthRecord: () => getHealthRecord,
  getIntakeRequirement: () => getIntakeRequirement,
  getInvoice: () => getInvoice,
  getLitter: () => getLitter,
  getPayrollPaidStatus: () => getPayrollPaidStatus,
  getPendingFollowupLogs: () => getPendingFollowupLogs,
  getProfitAndLossData: () => getProfitAndLossData,
  getPushTokensByClientId: () => getPushTokensByClientId,
  getSalesPipelineData: () => getSalesPipelineData,
  getShiftHandoffData: () => getShiftHandoffData,
  getStaffInvitationByToken: () => getStaffInvitationByToken,
  getStaffMember: () => getStaffMember,
  getStaffMemberByEmail: () => getStaffMemberByEmail,
  getStaffMemberByUserId: () => getStaffMemberByUserId,
  getStaffPayHistory: () => getStaffPayHistory,
  getStaffTimeHistory: () => getStaffTimeHistory,
  getTimeEntry: () => getTimeEntry,
  getWeeklyPayrollSummary: () => getWeeklyPayrollSummary,
  grantEbookAccess: () => grantEbookAccess,
  importClient: () => importClient,
  importInvoice: () => importInvoice,
  initializeBridgingSessions: () => initializeBridgingSessions,
  listAppointments: () => listAppointments,
  listBoardingDailyLogs: () => listBoardingDailyLogs,
  listBoardingReservations: () => listBoardingReservations,
  listBreedingCycles: () => listBreedingCycles,
  listBridgingSessions: () => listBridgingSessions,
  listCalendarEvents: () => listCalendarEvents,
  listClientComms: () => listClientComms,
  listClients: () => listClients,
  listContracts: () => listContracts,
  listDogDailyLogs: () => listDogDailyLogs,
  listDogLogPhotos: () => listDogLogPhotos,
  listDogMedications: () => listDogMedications,
  listDogs: () => listDogs,
  listDogsByClient: () => listDogsByClient,
  listEbookAccess: () => listEbookAccess,
  listExpenses: () => listExpenses,
  listFacilityTasks: () => listFacilityTasks,
  listFollowupLogs: () => listFollowupLogs,
  listFollowupSequences: () => listFollowupSequences,
  listFollowupSteps: () => listFollowupSteps,
  listHealthRecords: () => listHealthRecords,
  listHealthRecordsByClient: () => listHealthRecordsByClient,
  listIntakeRequirements: () => listIntakeRequirements,
  listInventory: () => listInventory,
  listInvoices: () => listInvoices,
  listLitters: () => listLitters,
  listMessages: () => listMessages,
  listNotificationSchedules: () => listNotificationSchedules,
  listPendingHealthRecords: () => listPendingHealthRecords,
  listPendingNotifications: () => listPendingNotifications,
  listPuppies: () => listPuppies,
  listStaffDogAssignments: () => listStaffDogAssignments,
  listStaffInvitations: () => listStaffInvitations,
  listStaffMembers: () => listStaffMembers,
  listTimeEntries: () => listTimeEntries,
  listTimeEntriesForPeriod: () => listTimeEntriesForPeriod,
  listTimeEntriesForWeek: () => listTimeEntriesForWeek,
  listTrainingLogs: () => listTrainingLogs,
  listTrainingMedia: () => listTrainingMedia,
  listTrainingMediaByDog: () => listTrainingMediaByDog,
  listTransactions: () => listTransactions,
  listUnreadMessages: () => listUnreadMessages,
  listWaitlist: () => listWaitlist,
  markMessagesRead: () => markMessagesRead,
  registerPushToken: () => registerPushToken,
  revokeStaffInvitation: () => revokeStaffInvitation,
  scheduleBridgingReminders: () => scheduleBridgingReminders,
  scheduleHealthRecordReminders: () => scheduleHealthRecordReminders,
  schedulePaymentReminders: () => schedulePaymentReminders,
  setPayrollPaid: () => setPayrollPaid,
  unassignDogFromStaff: () => unassignDogFromStaff,
  updateAppointment: () => updateAppointment,
  updateBoardingReservation: () => updateBoardingReservation,
  updateBridgingSession: () => updateBridgingSession,
  updateClient: () => updateClient,
  updateClientOnboarding: () => updateClientOnboarding,
  updateDog: () => updateDog,
  updateDogMedication: () => updateDogMedication,
  updateExpense: () => updateExpense,
  updateFollowupLog: () => updateFollowupLog,
  updateFollowupSequence: () => updateFollowupSequence,
  updateFollowupStep: () => updateFollowupStep,
  updateHealthRecord: () => updateHealthRecord,
  updateIntakeRequirement: () => updateIntakeRequirement,
  updateInventoryItem: () => updateInventoryItem,
  updateInvoice: () => updateInvoice,
  updateLitter: () => updateLitter,
  updateNotificationSchedule: () => updateNotificationSchedule,
  updatePuppy: () => updatePuppy,
  updateStaffInvitation: () => updateStaffInvitation,
  updateStaffMember: () => updateStaffMember,
  updateStaffPay: () => updateStaffPay,
  updateStaffPermissions: () => updateStaffPermissions,
  updateTimeEntry: () => updateTimeEntry,
  updateTransaction: () => updateTransaction,
  updateWaitlistEntry: () => updateWaitlistEntry,
  upsertDogDailyLog: () => upsertDogDailyLog,
  upsertDogFeedingInfo: () => upsertDogFeedingInfo,
  upsertFacilityTask: () => upsertFacilityTask
});
async function listCalendarEvents(startDate, endDate) {
  const db = await getDb();
  if (!db) return { appointments: [], bridgingSessions: [], boardingReservations: [] };
  const appts = await db.select({
    appointment: appointments,
    dogAlertBiteRisk: dogs.alertBiteRisk,
    dogAlertHandleWithCaution: dogs.alertHandleWithCaution,
    dogAlertDogReactive: dogs.alertDogReactive,
    dogAlertNervous: dogs.alertNervous,
    dogAlertInHeat: dogs.alertInHeat,
    dogName: dogs.name
  }).from(appointments).leftJoin(dogs, (0, import_drizzle_orm2.eq)(appointments.dogId, dogs.id)).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.gte)(appointments.startTime, new Date(startDate)),
    (0, import_drizzle_orm2.lte)(appointments.startTime, /* @__PURE__ */ new Date(endDate + "T23:59:59"))
  )).orderBy(appointments.startTime);
  const bridging = await db.select({
    session: bridgingSessions,
    dogAlertBiteRisk: dogs.alertBiteRisk,
    dogAlertHandleWithCaution: dogs.alertHandleWithCaution,
    dogAlertDogReactive: dogs.alertDogReactive,
    dogAlertNervous: dogs.alertNervous,
    dogAlertInHeat: dogs.alertInHeat,
    dogName: dogs.name
  }).from(bridgingSessions).leftJoin(dogs, (0, import_drizzle_orm2.eq)(bridgingSessions.dogId, dogs.id)).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.isNotNull)(bridgingSessions.scheduledAt),
    (0, import_drizzle_orm2.gte)(bridgingSessions.scheduledAt, new Date(startDate)),
    (0, import_drizzle_orm2.lte)(bridgingSessions.scheduledAt, /* @__PURE__ */ new Date(endDate + "T23:59:59"))
  )).orderBy(bridgingSessions.scheduledAt);
  const boarding = await db.select({
    reservation: boardingReservations,
    dogAlertBiteRisk: dogs.alertBiteRisk,
    dogAlertHandleWithCaution: dogs.alertHandleWithCaution,
    dogAlertDogReactive: dogs.alertDogReactive,
    dogAlertNervous: dogs.alertNervous,
    dogAlertInHeat: dogs.alertInHeat,
    dogName: dogs.name
  }).from(boardingReservations).leftJoin(dogs, (0, import_drizzle_orm2.eq)(boardingReservations.dogId, dogs.id)).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.gte)(boardingReservations.checkInDate, new Date(startDate)),
    (0, import_drizzle_orm2.lte)(boardingReservations.checkInDate, /* @__PURE__ */ new Date(endDate + "T23:59:59"))
  )).orderBy(boardingReservations.checkInDate);
  return {
    appointments: appts.map((r) => ({
      ...r.appointment,
      dogName: r.dogName,
      dogAlertBiteRisk: r.dogAlertBiteRisk,
      dogAlertHandleWithCaution: r.dogAlertHandleWithCaution,
      dogAlertDogReactive: r.dogAlertDogReactive,
      dogAlertNervous: r.dogAlertNervous,
      dogAlertInHeat: r.dogAlertInHeat
    })),
    bridgingSessions: bridging.map((r) => ({
      ...r.session,
      dogName: r.dogName,
      dogAlertBiteRisk: r.dogAlertBiteRisk,
      dogAlertHandleWithCaution: r.dogAlertHandleWithCaution,
      dogAlertDogReactive: r.dogAlertDogReactive,
      dogAlertNervous: r.dogAlertNervous,
      dogAlertInHeat: r.dogAlertInHeat
    })),
    boardingReservations: boarding.map((r) => ({
      ...r.reservation,
      dogName: r.dogName,
      dogAlertBiteRisk: r.dogAlertBiteRisk,
      dogAlertHandleWithCaution: r.dogAlertHandleWithCaution,
      dogAlertDogReactive: r.dogAlertDogReactive,
      dogAlertNervous: r.dogAlertNervous,
      dogAlertInHeat: r.dogAlertInHeat
    }))
  };
}
async function listClients(search) {
  const db = await getDb();
  if (!db) return [];
  if (search) {
    const term = `%${search}%`;
    return db.select().from(clients).where((0, import_drizzle_orm2.or)((0, import_drizzle_orm2.like)(clients.firstName, term), (0, import_drizzle_orm2.like)(clients.lastName, term), (0, import_drizzle_orm2.like)(clients.email, term))).orderBy((0, import_drizzle_orm2.desc)(clients.createdAt));
  }
  return db.select().from(clients).orderBy((0, import_drizzle_orm2.desc)(clients.createdAt));
}
async function getClient(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(clients).where((0, import_drizzle_orm2.eq)(clients.id, id)).limit(1);
  return rows[0];
}
async function createClient(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(clients).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateClient(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(clients).set(data).where((0, import_drizzle_orm2.eq)(clients.id, id));
  return { id };
}
async function listClientComms(clientId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(clientCommunications).where((0, import_drizzle_orm2.eq)(clientCommunications.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(clientCommunications.createdAt));
}
async function createClientComm(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(clientCommunications).values(data);
  return { id: Number(result[0].insertId) };
}
async function listDogs(search) {
  const db = await getDb();
  if (!db) return [];
  if (search) {
    const term = `%${search}%`;
    return db.select().from(dogs).where((0, import_drizzle_orm2.or)((0, import_drizzle_orm2.like)(dogs.name, term), (0, import_drizzle_orm2.like)(dogs.breed, term))).orderBy((0, import_drizzle_orm2.desc)(dogs.createdAt));
  }
  return db.select().from(dogs).orderBy((0, import_drizzle_orm2.desc)(dogs.createdAt));
}
async function getDog(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(dogs).where((0, import_drizzle_orm2.eq)(dogs.id, id)).limit(1);
  return rows[0];
}
async function createDog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(dogs).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateDog(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(dogs).set(data).where((0, import_drizzle_orm2.eq)(dogs.id, id));
  return { id };
}
async function listDogsByClient(clientId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(dogs).where((0, import_drizzle_orm2.eq)(dogs.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(dogs.createdAt));
}
async function listAppointments(filters) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (filters?.date) {
    conditions.push(import_drizzle_orm2.sql`DATE(${appointments.startTime}) = ${filters.date}`);
  }
  if (filters?.staffId) {
    conditions.push((0, import_drizzle_orm2.eq)(appointments.staffId, filters.staffId));
  }
  if (conditions.length > 0) {
    return db.select().from(appointments).where((0, import_drizzle_orm2.and)(...conditions)).orderBy(appointments.startTime);
  }
  return db.select().from(appointments).orderBy(appointments.startTime);
}
async function getAppointment(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(appointments).where((0, import_drizzle_orm2.eq)(appointments.id, id)).limit(1);
  return rows[0];
}
async function createAppointment(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(appointments).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateAppointment(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(appointments).set(data).where((0, import_drizzle_orm2.eq)(appointments.id, id));
  return { id };
}
async function deleteAppointment(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(appointments).where((0, import_drizzle_orm2.eq)(appointments.id, id));
  return { id };
}
async function listTrainingLogs(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(trainingLogs).where((0, import_drizzle_orm2.eq)(trainingLogs.dogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(trainingLogs.sessionDate));
}
async function createTrainingLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(trainingLogs).values(data);
  return { id: Number(result[0].insertId) };
}
async function listBreedingCycles(dogId) {
  const db = await getDb();
  if (!db) return [];
  if (dogId) {
    return db.select().from(breedingCycles).where((0, import_drizzle_orm2.eq)(breedingCycles.femaleDogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(breedingCycles.startDate));
  }
  return db.select().from(breedingCycles).orderBy((0, import_drizzle_orm2.desc)(breedingCycles.startDate));
}
async function createBreedingCycle(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(breedingCycles).values(data);
  return { id: Number(result[0].insertId) };
}
async function listLitters() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(litters).orderBy((0, import_drizzle_orm2.desc)(litters.createdAt));
}
async function getLitter(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(litters).where((0, import_drizzle_orm2.eq)(litters.id, id)).limit(1);
  return rows[0];
}
async function createLitter(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(litters).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateLitter(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(litters).set(data).where((0, import_drizzle_orm2.eq)(litters.id, id));
  return { id };
}
async function listPuppies(litterId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(puppies).where((0, import_drizzle_orm2.eq)(puppies.litterId, litterId)).orderBy(puppies.collarColor);
}
async function createPuppy(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(puppies).values(data);
  return { id: Number(result[0].insertId) };
}
async function updatePuppy(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(puppies).set(data).where((0, import_drizzle_orm2.eq)(puppies.id, id));
  return { id };
}
async function listWaitlist() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(waitlist).orderBy((0, import_drizzle_orm2.desc)(waitlist.createdAt));
}
async function createWaitlistEntry(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(waitlist).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateWaitlistEntry(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(waitlist).set(data).where((0, import_drizzle_orm2.eq)(waitlist.id, id));
  return { id };
}
async function listBoardingReservations(status) {
  const db = await getDb();
  if (!db) return [];
  if (status) {
    return db.select().from(boardingReservations).where((0, import_drizzle_orm2.eq)(boardingReservations.status, status)).orderBy((0, import_drizzle_orm2.desc)(boardingReservations.checkInDate));
  }
  return db.select().from(boardingReservations).orderBy((0, import_drizzle_orm2.desc)(boardingReservations.checkInDate));
}
async function getBoardingReservation(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(boardingReservations).where((0, import_drizzle_orm2.eq)(boardingReservations.id, id)).limit(1);
  return rows[0];
}
async function createBoardingReservation(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(boardingReservations).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateBoardingReservation(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(boardingReservations).set(data).where((0, import_drizzle_orm2.eq)(boardingReservations.id, id));
  return { id };
}
async function listBoardingDailyLogs(reservationId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(boardingDailyLogs).where((0, import_drizzle_orm2.eq)(boardingDailyLogs.reservationId, reservationId)).orderBy((0, import_drizzle_orm2.desc)(boardingDailyLogs.logDate));
}
async function createBoardingDailyLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(boardingDailyLogs).values(data);
  return { id: Number(result[0].insertId) };
}
async function listInvoices(clientId) {
  const db = await getDb();
  if (!db) return [];
  const query = db.select({
    id: invoices.id,
    clientId: invoices.clientId,
    clientFirstName: clients.firstName,
    clientLastName: clients.lastName,
    clientEmail: clients.email,
    clientPhone: clients.phone,
    squareInvoiceId: invoices.squareInvoiceId,
    squarePaymentLinkUrl: invoices.squarePaymentLinkUrl,
    amount: invoices.amount,
    description: invoices.description,
    status: invoices.status,
    dueDate: invoices.dueDate,
    paidAt: invoices.paidAt,
    createdAt: invoices.createdAt,
    updatedAt: invoices.updatedAt
  }).from(invoices).leftJoin(clients, (0, import_drizzle_orm2.eq)(invoices.clientId, clients.id));
  if (clientId) {
    return query.where((0, import_drizzle_orm2.eq)(invoices.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(invoices.dueDate), (0, import_drizzle_orm2.desc)(invoices.createdAt));
  }
  return query.orderBy((0, import_drizzle_orm2.desc)(invoices.dueDate), (0, import_drizzle_orm2.desc)(invoices.createdAt));
}
async function getInvoice(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select({
    id: invoices.id,
    clientId: invoices.clientId,
    clientFirstName: clients.firstName,
    clientLastName: clients.lastName,
    clientEmail: clients.email,
    clientPhone: clients.phone,
    squareInvoiceId: invoices.squareInvoiceId,
    squarePaymentLinkId: invoices.squarePaymentLinkId,
    squarePaymentLinkUrl: invoices.squarePaymentLinkUrl,
    squareOrderId: invoices.squareOrderId,
    amount: invoices.amount,
    description: invoices.description,
    status: invoices.status,
    dueDate: invoices.dueDate,
    paidAt: invoices.paidAt,
    createdAt: invoices.createdAt,
    updatedAt: invoices.updatedAt
  }).from(invoices).leftJoin(clients, (0, import_drizzle_orm2.eq)(invoices.clientId, clients.id)).where((0, import_drizzle_orm2.eq)(invoices.id, id)).limit(1);
  const invoice = rows[0];
  if (!invoice) return void 0;
  const txns = await db.select().from(transactions).where((0, import_drizzle_orm2.eq)(transactions.invoiceId, id)).orderBy((0, import_drizzle_orm2.desc)(transactions.createdAt));
  return { ...invoice, transactions: txns };
}
async function createInvoice(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(invoices).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateInvoice(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(invoices).set(data).where((0, import_drizzle_orm2.eq)(invoices.id, id));
  return { id };
}
async function listContracts(clientId) {
  const db = await getDb();
  if (!db) return [];
  if (clientId) {
    return db.select().from(contracts).where((0, import_drizzle_orm2.eq)(contracts.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(contracts.createdAt));
  }
  return db.select().from(contracts).orderBy((0, import_drizzle_orm2.desc)(contracts.createdAt));
}
async function createContract(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(contracts).values(data);
  return { id: Number(result[0].insertId) };
}
async function listInventory() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(inventory).orderBy(inventory.itemName);
}
async function createInventoryItem(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(inventory).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateInventoryItem(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(inventory).set(data).where((0, import_drizzle_orm2.eq)(inventory.id, id));
  return { id };
}
async function listTimeEntries(staffId) {
  const db = await getDb();
  if (!db) return [];
  if (staffId) {
    return db.select().from(timeEntries).where((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId)).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  }
  return db.select().from(timeEntries).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
}
async function createTimeEntry(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(timeEntries).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateTimeEntry(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(timeEntries).set(data).where((0, import_drizzle_orm2.eq)(timeEntries.id, id));
  return { id };
}
async function getStaffTimeHistory(staffId, limit, offset) {
  const db = await getDb();
  if (!db) return { entries: [], total: 0, totalHours: 0, totalShifts: 0 };
  const [stats] = await db.select({
    total: import_drizzle_orm2.sql`COUNT(*)`,
    totalHours: import_drizzle_orm2.sql`COALESCE(SUM(CAST(${timeEntries.totalHours} AS DECIMAL(10,2))), 0)`
  }).from(timeEntries).where((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId));
  let query = db.select().from(timeEntries).where((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId)).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  if (limit) {
    query = query.limit(limit);
    if (offset) query = query.offset(offset);
  }
  const entries = await query;
  return {
    entries,
    total: Number(stats.total),
    totalHours: Number(stats.totalHours),
    totalShifts: Number(stats.total)
  };
}
async function getTimeEntry(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(timeEntries).where((0, import_drizzle_orm2.eq)(timeEntries.id, id)).limit(1);
  return rows[0];
}
async function deleteTimeEntry(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(timeEntries).where((0, import_drizzle_orm2.eq)(timeEntries.id, id));
  return { id };
}
async function fullUpdateTimeEntry(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const updateData = {};
  if (data.clockIn !== void 0) updateData.clockIn = data.clockIn;
  if (data.clockOut !== void 0) updateData.clockOut = data.clockOut;
  if (data.notes !== void 0) updateData.notes = data.notes;
  if (data.clockIn && data.clockOut) {
    const hours = ((data.clockOut.getTime() - data.clockIn.getTime()) / 36e5).toFixed(2);
    updateData.totalHours = hours;
  } else if (data.clockOut === null) {
    updateData.totalHours = null;
  }
  await db.update(timeEntries).set(updateData).where((0, import_drizzle_orm2.eq)(timeEntries.id, id));
  return { id };
}
async function getActiveClockedIn() {
  const db = await getDb();
  if (!db) return [];
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.isNull)(timeEntries.clockOut)).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  const staff = await db.select().from(staffMembers);
  const staffMap = new Map(staff.map((s) => [s.id, s]));
  return entries.map((e) => ({
    ...e,
    staffName: staffMap.has(e.staffId) ? `${staffMap.get(e.staffId).firstName} ${staffMap.get(e.staffId).lastName}` : `Staff #${e.staffId}`,
    staffRole: staffMap.get(e.staffId)?.role ?? "unknown"
  }));
}
async function getActiveClockedInForStaff(staffId) {
  if (!staffId) return [];
  const db = await getDb();
  if (!db) return [];
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId), (0, import_drizzle_orm2.isNull)(timeEntries.clockOut))).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  const staff = await db.select().from(staffMembers).where((0, import_drizzle_orm2.eq)(staffMembers.id, staffId)).limit(1);
  const s = staff[0];
  return entries.map((e) => ({
    ...e,
    staffName: s ? `${s.firstName} ${s.lastName}` : `Staff #${e.staffId}`,
    staffRole: s?.role ?? "unknown"
  }));
}
async function getShiftHandoffData() {
  const db = await getDb();
  if (!db) return { recentShifts: [], lowStockItems: [], facilityStatus: null };
  const oneDayAgo = /* @__PURE__ */ new Date();
  oneDayAgo.setHours(oneDayAgo.getHours() - 24);
  const recentEntries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.isNotNull)(timeEntries.clockOut),
    (0, import_drizzle_orm2.gte)(timeEntries.clockOut, oneDayAgo)
  )).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockOut));
  const allStaff = await db.select().from(staffMembers);
  const staffMap = new Map(allStaff.map((s) => [s.id, s]));
  const recentShifts = recentEntries.map((e) => {
    const s = staffMap.get(e.staffId);
    return {
      id: e.id,
      staffId: e.staffId,
      staffName: s ? `${s.firstName} ${s.lastName}` : `Staff #${e.staffId}`,
      staffRole: s?.role ?? "unknown",
      clockIn: e.clockIn,
      clockOut: e.clockOut,
      totalHours: e.totalHours,
      notes: e.notes
    };
  });
  const allInventory = await db.select().from(inventory);
  const lowStockItems = allInventory.filter((item) => {
    const qty = parseFloat(String(item.quantity ?? "0"));
    const threshold = parseFloat(String(item.lowStockThreshold ?? "0"));
    return threshold > 0 && qty <= threshold;
  }).map((item) => ({
    id: item.id,
    itemName: item.itemName,
    category: item.category,
    quantity: parseFloat(String(item.quantity ?? "0")),
    unit: item.unit,
    lowStockThreshold: parseFloat(String(item.lowStockThreshold ?? "0"))
  }));
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const facilityRows = await db.select({
    task: facilityTasks,
    staffFirstName: staffMembers.firstName,
    staffLastName: staffMembers.lastName
  }).from(facilityTasks).leftJoin(staffMembers, (0, import_drizzle_orm2.eq)(facilityTasks.staffId, staffMembers.id)).where(import_drizzle_orm2.sql`${facilityTasks.taskDate} = ${todayStr}`);
  const ft = facilityRows[0];
  let facilityStatus = null;
  if (ft) {
    const task = ft.task;
    const excludeKeys = /* @__PURE__ */ new Set(["id", "staffId", "taskDate", "createdAt", "updatedAt", "notes"]);
    const boolFields = Object.entries(task).filter(([k, v]) => !excludeKeys.has(k) && (typeof v === "boolean" || typeof v === "number" && (v === 0 || v === 1)));
    const completed = boolFields.filter(([_, v]) => v === true || v === 1).length;
    const total = boolFields.length;
    facilityStatus = {
      taskDate: task.taskDate,
      completedCount: completed,
      totalCount: total,
      percentage: total > 0 ? Math.round(completed / total * 100) : 0,
      staffName: ft.staffFirstName ? `${ft.staffFirstName} ${ft.staffLastName ?? ""}`.trim() : null
    };
  }
  return { recentShifts, lowStockItems, facilityStatus };
}
async function getWeeklyPayrollSummary(weekStartISO) {
  const db = await getDb();
  if (!db) return [];
  const weekStart = new Date(weekStartISO);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.gte)(timeEntries.clockIn, weekStart),
    (0, import_drizzle_orm2.lt)(timeEntries.clockIn, weekEnd)
  )).orderBy(timeEntries.staffId, timeEntries.clockIn);
  const staff = await db.select().from(staffMembers);
  const staffMap = new Map(staff.map((s) => [s.id, s]));
  const grouped = /* @__PURE__ */ new Map();
  for (const e of entries) {
    if (!grouped.has(e.staffId)) grouped.set(e.staffId, []);
    grouped.get(e.staffId).push(e);
  }
  const result = [];
  for (const [staffId, staffEntries] of grouped) {
    const s = staffMap.get(staffId);
    let totalHours = 0;
    const shifts = staffEntries.map((e) => {
      const hours = e.totalHours ? parseFloat(e.totalHours) : null;
      if (hours) totalHours += hours;
      return {
        id: e.id,
        clockIn: e.clockIn.toISOString(),
        clockOut: e.clockOut ? e.clockOut.toISOString() : null,
        hours,
        notes: e.notes
      };
    });
    const hourlyRate = s?.hourlyRate ? parseFloat(s.hourlyRate) : 0;
    const estimatedPay = s?.payType === "salary" && s?.salary ? parseFloat(s.salary) / 52 : totalHours * hourlyRate;
    result.push({
      staffId,
      staffName: s ? `${s.firstName} ${s.lastName}` : `Staff #${staffId}`,
      role: s?.role ?? "unknown",
      payType: s?.payType ?? "hourly",
      hourlyRate: s?.hourlyRate ?? null,
      totalHours: Math.round(totalHours * 100) / 100,
      totalShifts: shifts.length,
      estimatedPay: Math.round(estimatedPay * 100) / 100,
      shifts
    });
  }
  for (const s of staff) {
    if (!grouped.has(s.id) && s.isActive) {
      result.push({
        staffId: s.id,
        staffName: `${s.firstName} ${s.lastName}`,
        role: s.role,
        payType: s.payType,
        hourlyRate: s.hourlyRate ?? null,
        totalHours: 0,
        totalShifts: 0,
        estimatedPay: 0,
        shifts: []
      });
    }
  }
  return result.sort((a, b) => b.totalHours - a.totalHours);
}
async function getBiweeklyPayrollSummary(periodStartISO, periodEndISO) {
  const db = await getDb();
  if (!db) return [];
  const periodStart = new Date(periodStartISO);
  periodStart.setHours(0, 0, 0, 0);
  const periodEnd = new Date(periodEndISO);
  periodEnd.setHours(23, 59, 59, 999);
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.gte)(timeEntries.clockIn, periodStart),
    (0, import_drizzle_orm2.lte)(timeEntries.clockIn, periodEnd)
  )).orderBy(timeEntries.staffId, timeEntries.clockIn);
  const staff = await db.select().from(staffMembers);
  const staffMap = new Map(staff.map((s) => [s.id, s]));
  const grouped = /* @__PURE__ */ new Map();
  for (const e of entries) {
    if (!grouped.has(e.staffId)) grouped.set(e.staffId, []);
    grouped.get(e.staffId).push(e);
  }
  const result = [];
  const week1Start = new Date(periodStart);
  const week1End = new Date(periodStart);
  week1End.setDate(week1End.getDate() + 6);
  week1End.setHours(23, 59, 59, 999);
  for (const [staffId, staffEntries] of grouped) {
    const s = staffMap.get(staffId);
    let totalHours = 0;
    let week1Hours = 0;
    let week1Shifts = 0;
    let week2Hours = 0;
    let week2Shifts = 0;
    const shifts = staffEntries.map((e) => {
      const hours = e.totalHours ? parseFloat(e.totalHours) : null;
      if (hours) totalHours += hours;
      const clockInDate = new Date(e.clockIn);
      const isWeek1 = clockInDate <= week1End;
      if (hours) {
        if (isWeek1) {
          week1Hours += hours;
          week1Shifts++;
        } else {
          week2Hours += hours;
          week2Shifts++;
        }
      } else {
        if (isWeek1) week1Shifts++;
        else week2Shifts++;
      }
      return {
        id: e.id,
        clockIn: e.clockIn.toISOString(),
        clockOut: e.clockOut ? e.clockOut.toISOString() : null,
        hours,
        notes: e.notes,
        day: clockInDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
      };
    });
    const hourlyRate = s?.hourlyRate ? parseFloat(s.hourlyRate) : 0;
    const w1Regular = Math.min(week1Hours, 40);
    const w1OT = Math.max(week1Hours - 40, 0);
    const w2Regular = Math.min(week2Hours, 40);
    const w2OT = Math.max(week2Hours - 40, 0);
    const regularHours = w1Regular + w2Regular;
    const overtimeHours = w1OT + w2OT;
    let estimatedPay;
    let overtimePay = 0;
    if (s?.payType === "salary" && s?.salary) {
      estimatedPay = parseFloat(s.salary) / 26;
    } else {
      overtimePay = overtimeHours * hourlyRate * 1.5;
      estimatedPay = regularHours * hourlyRate + overtimePay;
    }
    const week1Label = `${periodStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} \u2013 ${week1End.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
    const week2Start = new Date(week1End);
    week2Start.setDate(week2Start.getDate() + 1);
    const week2Label = `${week2Start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} \u2013 ${periodEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
    result.push({
      staffId,
      staffName: s ? `${s.firstName} ${s.lastName}` : `Staff #${staffId}`,
      role: s?.role ?? "unknown",
      payType: s?.payType ?? "hourly",
      hourlyRate: s?.hourlyRate ?? null,
      salary: s?.salary ?? null,
      totalHours: Math.round(totalHours * 100) / 100,
      totalShifts: shifts.length,
      estimatedPay: Math.round(estimatedPay * 100) / 100,
      regularHours: Math.round(regularHours * 100) / 100,
      overtimeHours: Math.round(overtimeHours * 100) / 100,
      overtimePay: Math.round(overtimePay * 100) / 100,
      shifts,
      weeklyBreakdown: [
        { weekLabel: week1Label, hours: Math.round(week1Hours * 100) / 100, shifts: week1Shifts },
        { weekLabel: week2Label, hours: Math.round(week2Hours * 100) / 100, shifts: week2Shifts }
      ]
    });
  }
  for (const s of staff) {
    if (!grouped.has(s.id) && s.isActive) {
      result.push({
        staffId: s.id,
        staffName: `${s.firstName} ${s.lastName}`,
        role: s.role,
        payType: s.payType,
        hourlyRate: s.hourlyRate ?? null,
        salary: s.salary ?? null,
        totalHours: 0,
        totalShifts: 0,
        estimatedPay: 0,
        regularHours: 0,
        overtimeHours: 0,
        overtimePay: 0,
        shifts: [],
        weeklyBreakdown: []
      });
    }
  }
  return result.sort((a, b) => b.totalHours - a.totalHours);
}
async function getPayrollPaidStatus(periodStartISO, periodEndISO) {
  const db = await getDb();
  if (!db) return [];
  const records = await db.select().from(payrollPayments).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.eq)(payrollPayments.periodStart, periodStartISO.split("T")[0]),
    (0, import_drizzle_orm2.eq)(payrollPayments.periodEnd, periodEndISO.split("T")[0])
  ));
  return records.map((r) => ({
    staffId: r.staffId,
    paidAt: r.paidAt ? r.paidAt.toISOString() : null,
    paidBy: r.paidBy,
    notes: r.notes
  }));
}
async function setPayrollPaid(staffId, periodStartISO, periodEndISO, paid, paidByUserId, notes) {
  const db = await getDb();
  if (!db) throw new Error("DB not available");
  const periodStart = periodStartISO.split("T")[0];
  const periodEnd = periodEndISO.split("T")[0];
  if (paid) {
    await db.insert(payrollPayments).values({
      staffId,
      periodStart,
      periodEnd,
      paidAt: /* @__PURE__ */ new Date(),
      paidBy: paidByUserId ?? null,
      notes: notes ?? null
    }).onDuplicateKeyUpdate({
      set: { paidAt: /* @__PURE__ */ new Date(), paidBy: paidByUserId ?? null, notes: notes ?? null }
    });
  } else {
    await db.delete(payrollPayments).where((0, import_drizzle_orm2.and)(
      (0, import_drizzle_orm2.eq)(payrollPayments.staffId, staffId),
      (0, import_drizzle_orm2.eq)(payrollPayments.periodStart, periodStart)
    ));
  }
  return { success: true };
}
async function listTimeEntriesForWeek(weekStartISO, staffId) {
  const db = await getDb();
  if (!db) return [];
  const weekStart = new Date(weekStartISO);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const conditions = [
    (0, import_drizzle_orm2.gte)(timeEntries.clockIn, weekStart),
    (0, import_drizzle_orm2.lt)(timeEntries.clockIn, weekEnd)
  ];
  if (staffId) conditions.push((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId));
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)(...conditions)).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  const staff = await db.select().from(staffMembers);
  const staffMap = new Map(staff.map((s) => [s.id, s]));
  return entries.map((e) => ({
    ...e,
    staffName: staffMap.has(e.staffId) ? `${staffMap.get(e.staffId).firstName} ${staffMap.get(e.staffId).lastName}` : `Staff #${e.staffId}`
  }));
}
async function listTimeEntriesForPeriod(periodStartISO, periodEndISO, staffId) {
  const db = await getDb();
  if (!db) return [];
  const periodStart = new Date(periodStartISO);
  periodStart.setHours(0, 0, 0, 0);
  const periodEnd = new Date(periodEndISO);
  periodEnd.setHours(23, 59, 59, 999);
  const conditions = [
    (0, import_drizzle_orm2.gte)(timeEntries.clockIn, periodStart),
    (0, import_drizzle_orm2.lte)(timeEntries.clockIn, periodEnd)
  ];
  if (staffId) conditions.push((0, import_drizzle_orm2.eq)(timeEntries.staffId, staffId));
  const entries = await db.select().from(timeEntries).where((0, import_drizzle_orm2.and)(...conditions)).orderBy((0, import_drizzle_orm2.desc)(timeEntries.clockIn));
  const staff = await db.select().from(staffMembers);
  const staffMap = new Map(staff.map((s) => [s.id, s]));
  return entries.map((e) => ({
    ...e,
    staffName: staffMap.has(e.staffId) ? `${staffMap.get(e.staffId).firstName} ${staffMap.get(e.staffId).lastName}` : `Staff #${e.staffId}`
  }));
}
async function listBridgingSessions(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(bridgingSessions).where((0, import_drizzle_orm2.eq)(bridgingSessions.dogId, dogId)).orderBy(bridgingSessions.sortOrder);
}
async function getBridgingSession(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(bridgingSessions).where((0, import_drizzle_orm2.eq)(bridgingSessions.id, id)).limit(1);
  return rows[0];
}
async function createBridgingSession(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(bridgingSessions).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateBridgingSession(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(bridgingSessions).set(data).where((0, import_drizzle_orm2.eq)(bridgingSessions.id, id));
  return { id };
}
async function initializeBridgingSessions(dogId, clientId) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(bridgingSessions).where((0, import_drizzle_orm2.eq)(bridgingSessions.dogId, dogId));
  if (existing.length > 0) return existing;
  const mandatory = [
    {
      dogId,
      clientId,
      type: "classroom",
      title: "Chapter 1: The Fundamentals",
      description: "Classroom-style session covering the fundamentals of dog training \u2014 leadership, learning & conditioning, correction & praise, engagement, and auto sit + heel.",
      sortOrder: 1,
      status: "pending"
    },
    {
      dogId,
      clientId,
      type: "go_home",
      title: "Go Home: Nothing In Life Is Free",
      description: "Go-home session covering transitioning rules, maintaining leadership, problem solving, recall, and common mistakes to avoid.",
      sortOrder: 100,
      status: "pending"
    }
  ];
  await db.insert(bridgingSessions).values(mandatory);
  return db.select().from(bridgingSessions).where((0, import_drizzle_orm2.eq)(bridgingSessions.dogId, dogId)).orderBy(bridgingSessions.sortOrder);
}
async function listEbookAccess(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(ebookAccess).where((0, import_drizzle_orm2.eq)(ebookAccess.dogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(ebookAccess.unlockedAt));
}
async function grantEbookAccess(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(ebookAccess).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(ebookAccess.dogId, data.dogId), (0, import_drizzle_orm2.eq)(ebookAccess.ebookKey, data.ebookKey))).limit(1);
  if (existing.length > 0) return existing[0];
  const result = await db.insert(ebookAccess).values(data);
  return { id: Number(result[0].insertId) };
}
async function completeBridgingSession(sessionId) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const session = await getBridgingSession(sessionId);
  if (!session) throw new Error("Session not found");
  await db.update(bridgingSessions).set({
    status: "completed",
    completedAt: /* @__PURE__ */ new Date()
  }).where((0, import_drizzle_orm2.eq)(bridgingSessions.id, sessionId));
  const ebookKeyMap = {
    classroom: "chapter1_fundamentals",
    go_home: "nothing_in_life_is_free"
  };
  const ebookKey = ebookKeyMap[session.type];
  if (ebookKey) {
    await grantEbookAccess({
      dogId: session.dogId,
      clientId: session.clientId ?? void 0,
      ebookKey,
      bridgingSessionId: sessionId
    });
  }
  return { id: sessionId, ebookKey };
}
async function getDashboardStats() {
  const db = await getDb();
  if (!db) return { newLeads: 0, todayAppointments: 0, activeBoarding: 0, unpaidInvoices: 0, activeLitters: 0, totalDogs: 0, totalTrainingSessions: 0, metaLeads: 0, pendingFollowups: 0 };
  const [newLeadsResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(clients).where((0, import_drizzle_orm2.eq)(clients.leadStatus, "new"));
  const [todayApptResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(appointments).where(import_drizzle_orm2.sql`DATE(${appointments.startTime}) = CURDATE()`);
  const [activeBoardingResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(boardingReservations).where((0, import_drizzle_orm2.eq)(boardingReservations.status, "active"));
  const [unpaidInvoiceResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(invoices).where((0, import_drizzle_orm2.or)((0, import_drizzle_orm2.eq)(invoices.status, "sent"), (0, import_drizzle_orm2.eq)(invoices.status, "overdue")));
  const [activeLittersResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(litters).where((0, import_drizzle_orm2.or)((0, import_drizzle_orm2.eq)(litters.status, "pregnant"), (0, import_drizzle_orm2.eq)(litters.status, "whelped")));
  const [totalDogsResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(dogs).where((0, import_drizzle_orm2.eq)(dogs.status, "active"));
  const [totalTrainingResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(trainingLogs);
  const [metaLeadsResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(clients).where((0, import_drizzle_orm2.eq)(clients.leadSource, "meta"));
  const [pendingFollowupsResult] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(leadFollowupLogs).where((0, import_drizzle_orm2.eq)(leadFollowupLogs.status, "pending"));
  return {
    newLeads: newLeadsResult?.count ?? 0,
    todayAppointments: todayApptResult?.count ?? 0,
    activeBoarding: activeBoardingResult?.count ?? 0,
    unpaidInvoices: unpaidInvoiceResult?.count ?? 0,
    activeLitters: activeLittersResult?.count ?? 0,
    totalDogs: totalDogsResult?.count ?? 0,
    totalTrainingSessions: totalTrainingResult?.count ?? 0,
    metaLeads: metaLeadsResult?.count ?? 0,
    pendingFollowups: pendingFollowupsResult?.count ?? 0
  };
}
async function listMessages(clientId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(messages).where((0, import_drizzle_orm2.eq)(messages.clientId, clientId)).orderBy(messages.createdAt);
}
async function listUnreadMessages() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(messages).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(messages.senderType, "client"), import_drizzle_orm2.sql`${messages.readAt} IS NULL`)).orderBy((0, import_drizzle_orm2.desc)(messages.createdAt));
}
async function createMessage(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(messages).values(data);
  return { id: Number(result[0].insertId) };
}
async function markMessagesRead(clientId, senderType) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(messages).set({ readAt: /* @__PURE__ */ new Date() }).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(messages.clientId, clientId), (0, import_drizzle_orm2.eq)(messages.senderType, senderType), import_drizzle_orm2.sql`${messages.readAt} IS NULL`));
}
async function registerPushToken(userId, token, platform) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(pushTokens).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(pushTokens.userId, userId), (0, import_drizzle_orm2.eq)(pushTokens.token, token))).limit(1);
  if (existing.length > 0) {
    await db.update(pushTokens).set({ isActive: true, platform }).where((0, import_drizzle_orm2.eq)(pushTokens.id, existing[0].id));
    return existing[0];
  }
  const result = await db.insert(pushTokens).values({ userId, token, platform });
  return { id: Number(result[0].insertId) };
}
async function getActivePushTokens(userId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(pushTokens).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(pushTokens.userId, userId), (0, import_drizzle_orm2.eq)(pushTokens.isActive, true)));
}
async function getPushTokensByClientId(clientId) {
  const db = await getDb();
  if (!db) return [];
  const client = await getClient(clientId);
  if (!client?.userId) return [];
  return getActivePushTokens(client.userId);
}
async function listNotificationSchedules(clientId) {
  const db = await getDb();
  if (!db) return [];
  if (clientId) {
    return db.select().from(notificationSchedules).where((0, import_drizzle_orm2.eq)(notificationSchedules.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(notificationSchedules.scheduledFor));
  }
  return db.select().from(notificationSchedules).orderBy((0, import_drizzle_orm2.desc)(notificationSchedules.scheduledFor));
}
async function listPendingNotifications() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(notificationSchedules).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.eq)(notificationSchedules.status, "pending"),
    import_drizzle_orm2.sql`${notificationSchedules.scheduledFor} <= NOW()`
  )).orderBy(notificationSchedules.scheduledFor);
}
async function createNotificationSchedule(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(notificationSchedules).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateNotificationSchedule(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(notificationSchedules).set(data).where((0, import_drizzle_orm2.eq)(notificationSchedules.id, id));
  return { id };
}
async function schedulePaymentReminders(invoiceId, clientId, dueDate) {
  const due = new Date(dueDate);
  const threeDaysBefore = new Date(due);
  threeDaysBefore.setDate(due.getDate() - 3);
  const oneDayBefore = new Date(due);
  oneDayBefore.setDate(due.getDate() - 1);
  const reminders = [
    { scheduledFor: threeDaysBefore, title: "Payment Reminder", body: `Your invoice is due in 3 days (${dueDate}). Please submit payment to avoid any delays.` },
    { scheduledFor: oneDayBefore, title: "Payment Due Tomorrow", body: `Your invoice is due tomorrow (${dueDate}). Please ensure payment is submitted.` },
    { scheduledFor: due, title: "Payment Due Today", body: `Your invoice is due today (${dueDate}). Please submit payment as soon as possible.` }
  ];
  for (const r of reminders) {
    if (r.scheduledFor > /* @__PURE__ */ new Date()) {
      await createNotificationSchedule({
        clientId,
        type: "payment_reminder",
        referenceType: "invoice",
        referenceId: invoiceId,
        title: r.title,
        body: r.body,
        scheduledFor: r.scheduledFor
      });
    }
  }
}
async function scheduleBridgingReminders(sessionId, clientId, scheduledAt) {
  const oneDayBefore = new Date(scheduledAt);
  oneDayBefore.setDate(scheduledAt.getDate() - 1);
  const oneHourBefore = new Date(scheduledAt);
  oneHourBefore.setHours(scheduledAt.getHours() - 1);
  const reminders = [
    { scheduledFor: oneDayBefore, title: "Bridging Session Tomorrow", body: "You have a bridging session scheduled for tomorrow. Please arrive on time with your dog." },
    { scheduledFor: oneHourBefore, title: "Bridging Session in 1 Hour", body: "Your bridging session starts in 1 hour. See you soon!" }
  ];
  for (const r of reminders) {
    if (r.scheduledFor > /* @__PURE__ */ new Date()) {
      await createNotificationSchedule({
        clientId,
        type: "bridging_reminder",
        referenceType: "bridging_session",
        referenceId: sessionId,
        title: r.title,
        body: r.body,
        scheduledFor: r.scheduledFor
      });
    }
  }
}
async function listHealthRecords(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(healthRecords).where((0, import_drizzle_orm2.eq)(healthRecords.dogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(healthRecords.createdAt));
}
async function listHealthRecordsByClient(clientId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(healthRecords).where((0, import_drizzle_orm2.eq)(healthRecords.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(healthRecords.createdAt));
}
async function listPendingHealthRecords() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(healthRecords).where((0, import_drizzle_orm2.eq)(healthRecords.status, "submitted")).orderBy((0, import_drizzle_orm2.desc)(healthRecords.createdAt));
}
async function getHealthRecord(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(healthRecords).where((0, import_drizzle_orm2.eq)(healthRecords.id, id)).limit(1);
  return rows[0];
}
async function createHealthRecord(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(healthRecords).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateHealthRecord(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(healthRecords).set(data).where((0, import_drizzle_orm2.eq)(healthRecords.id, id));
  return { id };
}
async function listIntakeRequirements(dogId, clientId) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (dogId) conditions.push((0, import_drizzle_orm2.eq)(intakeRequirements.dogId, dogId));
  if (clientId) conditions.push((0, import_drizzle_orm2.eq)(intakeRequirements.clientId, clientId));
  if (conditions.length > 0) {
    return db.select().from(intakeRequirements).where((0, import_drizzle_orm2.and)(...conditions)).orderBy((0, import_drizzle_orm2.desc)(intakeRequirements.intakeDate));
  }
  return db.select().from(intakeRequirements).orderBy((0, import_drizzle_orm2.desc)(intakeRequirements.intakeDate));
}
async function getIntakeRequirement(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(intakeRequirements).where((0, import_drizzle_orm2.eq)(intakeRequirements.id, id)).limit(1);
  return rows[0];
}
async function createIntakeRequirement(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(intakeRequirements).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateIntakeRequirement(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(intakeRequirements).set(data).where((0, import_drizzle_orm2.eq)(intakeRequirements.id, id));
  return { id };
}
async function scheduleHealthRecordReminders(intakeReqId, clientId, intakeDate, dogName) {
  const intake = new Date(intakeDate);
  const fourteenDaysBefore = new Date(intake);
  fourteenDaysBefore.setDate(intake.getDate() - 14);
  const sevenDaysBefore = new Date(intake);
  sevenDaysBefore.setDate(intake.getDate() - 7);
  const threeDaysBefore = new Date(intake);
  threeDaysBefore.setDate(intake.getDate() - 3);
  const reminders = [
    { scheduledFor: fourteenDaysBefore, title: "Health Records Needed", body: `${dogName}'s intake is in 2 weeks. Please submit up-to-date vaccine records and schedule a fecal test (must be within 7 days of intake).` },
    { scheduledFor: sevenDaysBefore, title: "Health Records Reminder", body: `${dogName}'s intake is in 1 week. Please submit vaccine records and a clear fecal result. The fecal test must be done within 7 days of intake (${intakeDate}).` },
    { scheduledFor: threeDaysBefore, title: "Urgent: Health Records Due", body: `${dogName}'s intake is in 3 days. We still need health records submitted. Fecal results must be within 7 days of intake. Please submit ASAP.` }
  ];
  for (const r of reminders) {
    if (r.scheduledFor > /* @__PURE__ */ new Date()) {
      await createNotificationSchedule({
        clientId,
        type: "health_record_reminder",
        referenceType: "health_record",
        referenceId: intakeReqId,
        title: r.title,
        body: r.body,
        scheduledFor: r.scheduledFor
      });
    }
  }
}
async function getClientPortalData(clientId) {
  const db = await getDb();
  if (!db) return null;
  const clientDogs = await listDogsByClient(clientId);
  const clientInvoices = await listInvoices(clientId);
  const clientContracts = await listContracts(clientId);
  const clientHealthRecords = await listHealthRecordsByClient(clientId);
  const clientIntakeReqs = await listIntakeRequirements(void 0, clientId);
  const unreadCount = (await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(messages).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(messages.clientId, clientId), (0, import_drizzle_orm2.eq)(messages.senderType, "staff"), import_drizzle_orm2.sql`${messages.readAt} IS NULL`)))[0]?.count ?? 0;
  return {
    dogs: clientDogs,
    invoices: clientInvoices,
    contracts: clientContracts,
    healthRecords: clientHealthRecords,
    intakeRequirements: clientIntakeReqs,
    unreadMessages: unreadCount
  };
}
async function listStaffMembers() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(staffMembers).orderBy(staffMembers.firstName);
}
async function getStaffMember(id) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(staffMembers).where((0, import_drizzle_orm2.eq)(staffMembers.id, id)).limit(1);
  return rows[0];
}
async function createStaffMember(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(staffMembers).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateStaffMember(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffMembers).set(data).where((0, import_drizzle_orm2.eq)(staffMembers.id, id));
  return { id };
}
async function updateStaffPay(input) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffMembers).set({
    payType: input.payType,
    hourlyRate: input.hourlyRate ?? null,
    salary: input.salary ?? null,
    commissionRate: input.commissionRate ?? null
  }).where((0, import_drizzle_orm2.eq)(staffMembers.id, input.staffId));
  await db.insert(staffPayHistory).values({
    staffId: input.staffId,
    payType: input.payType,
    hourlyRate: input.hourlyRate ?? null,
    salary: input.salary ?? null,
    commissionRate: input.commissionRate ?? null,
    notes: input.notes ?? null
  });
  return { staffId: input.staffId };
}
async function getStaffPayHistory(staffId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(staffPayHistory).where((0, import_drizzle_orm2.eq)(staffPayHistory.staffId, staffId)).orderBy((0, import_drizzle_orm2.desc)(staffPayHistory.effectiveDate));
}
async function updateStaffPermissions(staffId, permissions) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffMembers).set({ permissions }).where((0, import_drizzle_orm2.eq)(staffMembers.id, staffId));
  return { staffId };
}
async function listStaffDogAssignments(staffId, dogId) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (staffId) conditions.push((0, import_drizzle_orm2.eq)(staffDogAssignments.staffId, staffId));
  if (dogId) conditions.push((0, import_drizzle_orm2.eq)(staffDogAssignments.dogId, dogId));
  if (conditions.length > 0) {
    return db.select().from(staffDogAssignments).where((0, import_drizzle_orm2.and)(...conditions));
  }
  return db.select().from(staffDogAssignments);
}
async function assignDogToStaff(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(staffDogAssignments).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(staffDogAssignments.staffId, data.staffId), (0, import_drizzle_orm2.eq)(staffDogAssignments.dogId, data.dogId))).limit(1);
  if (existing.length > 0) return existing[0];
  const result = await db.insert(staffDogAssignments).values(data);
  return { id: Number(result[0].insertId) };
}
async function unassignDogFromStaff(staffId, dogId) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(staffDogAssignments).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(staffDogAssignments.staffId, staffId), (0, import_drizzle_orm2.eq)(staffDogAssignments.dogId, dogId)));
}
async function createStaffInvitation(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(staffInvitations).values(data);
  return { id: Number(result[0].insertId) };
}
async function getStaffInvitationByToken(token) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(staffInvitations).where((0, import_drizzle_orm2.eq)(staffInvitations.token, token)).limit(1);
  return rows[0];
}
async function listStaffInvitations(staffId) {
  const db = await getDb();
  if (!db) return [];
  if (staffId) {
    return db.select().from(staffInvitations).where((0, import_drizzle_orm2.eq)(staffInvitations.staffId, staffId)).orderBy((0, import_drizzle_orm2.desc)(staffInvitations.createdAt));
  }
  return db.select().from(staffInvitations).orderBy((0, import_drizzle_orm2.desc)(staffInvitations.createdAt));
}
async function updateStaffInvitation(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffInvitations).set(data).where((0, import_drizzle_orm2.eq)(staffInvitations.id, id));
  return { id };
}
async function revokeStaffInvitation(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffInvitations).set({ status: "revoked" }).where((0, import_drizzle_orm2.eq)(staffInvitations.id, id));
  return { id };
}
async function acceptStaffInvitation(invitationId, userId) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(staffInvitations).set({
    status: "accepted",
    acceptedAt: /* @__PURE__ */ new Date(),
    acceptedByUserId: userId
  }).where((0, import_drizzle_orm2.eq)(staffInvitations.id, invitationId));
  const inv = await db.select().from(staffInvitations).where((0, import_drizzle_orm2.eq)(staffInvitations.id, invitationId)).limit(1);
  if (!inv[0]) throw new Error("Invitation not found");
  await db.update(staffMembers).set({
    userId,
    inviteStatus: "accepted"
  }).where((0, import_drizzle_orm2.eq)(staffMembers.id, inv[0].staffId));
  return { staffId: inv[0].staffId };
}
async function getStaffMemberByUserId(userId) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(staffMembers).where((0, import_drizzle_orm2.eq)(staffMembers.userId, userId)).limit(1);
  return rows[0];
}
async function getStaffMemberByEmail(email) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(staffMembers).where(import_drizzle_orm2.sql`LOWER(${staffMembers.email}) = LOWER(${email})`).limit(1);
  return rows[0];
}
async function ensureOwnerStaffRecord(userId, name, email) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await getStaffMemberByUserId(userId);
  if (existing) return existing;
  if (email) {
    const byEmail = await getStaffMemberByEmail(email);
    if (byEmail && !byEmail.userId) {
      await db.update(staffMembers).set({ userId, inviteStatus: "accepted" }).where((0, import_drizzle_orm2.eq)(staffMembers.id, byEmail.id));
      return { ...byEmail, userId };
    }
  }
  const ownerRows = await db.select().from(staffMembers).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(staffMembers.role, "owner"), (0, import_drizzle_orm2.isNull)(staffMembers.userId))).limit(1);
  if (ownerRows[0]) {
    await db.update(staffMembers).set({ userId, inviteStatus: "accepted" }).where((0, import_drizzle_orm2.eq)(staffMembers.id, ownerRows[0].id));
    return { ...ownerRows[0], userId };
  }
  const nameParts = (name || "Owner").split(" ");
  const firstName = nameParts[0] || "Owner";
  const lastName = nameParts.slice(1).join(" ") || "";
  const result = await db.insert(staffMembers).values({
    userId,
    firstName,
    lastName,
    email: email ?? void 0,
    role: "owner",
    isActive: true,
    inviteStatus: "accepted"
  });
  return { id: Number(result[0].insertId), userId, firstName, lastName, role: "owner" };
}
async function listTrainingMedia(trainingLogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(trainingMedia).where((0, import_drizzle_orm2.eq)(trainingMedia.trainingLogId, trainingLogId)).orderBy((0, import_drizzle_orm2.desc)(trainingMedia.createdAt));
}
async function listTrainingMediaByDog(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(trainingMedia).where((0, import_drizzle_orm2.eq)(trainingMedia.dogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(trainingMedia.createdAt));
}
async function createTrainingMedia(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(trainingMedia).values(data);
  return { id: Number(result[0].insertId) };
}
async function deleteTrainingMedia(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(trainingMedia).where((0, import_drizzle_orm2.eq)(trainingMedia.id, id));
}
async function getClientOnboarding(clientId) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(clientOnboarding).where((0, import_drizzle_orm2.eq)(clientOnboarding.clientId, clientId)).limit(1);
  return rows[0];
}
async function createClientOnboarding(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(clientOnboarding).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateClientOnboarding(clientId, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(clientOnboarding).set(data).where((0, import_drizzle_orm2.eq)(clientOnboarding.clientId, clientId));
  return { clientId };
}
async function getDogFeedingInfo(dogId) {
  const db = await getDb();
  if (!db) return void 0;
  const rows = await db.select().from(dogFeedingInfo).where((0, import_drizzle_orm2.eq)(dogFeedingInfo.dogId, dogId)).limit(1);
  return rows[0];
}
async function upsertDogFeedingInfo(dogId, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(dogFeedingInfo).where((0, import_drizzle_orm2.eq)(dogFeedingInfo.dogId, dogId)).limit(1);
  if (existing.length > 0) {
    await db.update(dogFeedingInfo).set(data).where((0, import_drizzle_orm2.eq)(dogFeedingInfo.dogId, dogId));
    return { id: existing[0].id };
  } else {
    const result = await db.insert(dogFeedingInfo).values({ dogId, ...data });
    return { id: Number(result[0].insertId) };
  }
}
async function listDogMedications(dogId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(dogMedications).where((0, import_drizzle_orm2.eq)(dogMedications.dogId, dogId)).orderBy((0, import_drizzle_orm2.desc)(dogMedications.createdAt));
}
async function createDogMedication(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(dogMedications).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateDogMedication(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(dogMedications).set(data).where((0, import_drizzle_orm2.eq)(dogMedications.id, id));
  return { id };
}
async function deleteDogMedication(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(dogMedications).where((0, import_drizzle_orm2.eq)(dogMedications.id, id));
}
async function listFollowupSequences() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(leadFollowupSequences).orderBy((0, import_drizzle_orm2.desc)(leadFollowupSequences.createdAt));
}
async function getFollowupSequence(id) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(leadFollowupSequences).where((0, import_drizzle_orm2.eq)(leadFollowupSequences.id, id));
  return rows[0] ?? null;
}
async function createFollowupSequence(data) {
  const db = await getDb();
  if (!db) return null;
  const [result] = await db.insert(leadFollowupSequences).values(data);
  return { id: Number(result.insertId) };
}
async function updateFollowupSequence(id, data) {
  const db = await getDb();
  if (!db) return;
  await db.update(leadFollowupSequences).set(data).where((0, import_drizzle_orm2.eq)(leadFollowupSequences.id, id));
}
async function deleteFollowupSequence(id) {
  const db = await getDb();
  if (!db) return;
  await db.delete(leadFollowupSteps).where((0, import_drizzle_orm2.eq)(leadFollowupSteps.sequenceId, id));
  await db.delete(leadFollowupLogs).where((0, import_drizzle_orm2.eq)(leadFollowupLogs.sequenceId, id));
  await db.delete(leadFollowupSequences).where((0, import_drizzle_orm2.eq)(leadFollowupSequences.id, id));
}
async function listFollowupSteps(sequenceId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(leadFollowupSteps).where((0, import_drizzle_orm2.eq)(leadFollowupSteps.sequenceId, sequenceId)).orderBy(leadFollowupSteps.stepOrder);
}
async function createFollowupStep(data) {
  const db = await getDb();
  if (!db) return null;
  const [result] = await db.insert(leadFollowupSteps).values(data);
  return { id: Number(result.insertId) };
}
async function updateFollowupStep(id, data) {
  const db = await getDb();
  if (!db) return;
  await db.update(leadFollowupSteps).set(data).where((0, import_drizzle_orm2.eq)(leadFollowupSteps.id, id));
}
async function deleteFollowupStep(id) {
  const db = await getDb();
  if (!db) return;
  await db.delete(leadFollowupSteps).where((0, import_drizzle_orm2.eq)(leadFollowupSteps.id, id));
}
async function listFollowupLogs(filters) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (filters?.clientId) conditions.push((0, import_drizzle_orm2.eq)(leadFollowupLogs.clientId, filters.clientId));
  if (filters?.sequenceId) conditions.push((0, import_drizzle_orm2.eq)(leadFollowupLogs.sequenceId, filters.sequenceId));
  if (filters?.status) conditions.push((0, import_drizzle_orm2.eq)(leadFollowupLogs.status, filters.status));
  return db.select().from(leadFollowupLogs).where(conditions.length > 0 ? (0, import_drizzle_orm2.and)(...conditions) : void 0).orderBy((0, import_drizzle_orm2.desc)(leadFollowupLogs.scheduledAt));
}
async function createFollowupLog(data) {
  const db = await getDb();
  if (!db) return null;
  const [result] = await db.insert(leadFollowupLogs).values(data);
  return { id: Number(result.insertId) };
}
async function updateFollowupLog(id, data) {
  const db = await getDb();
  if (!db) return;
  await db.update(leadFollowupLogs).set(data).where((0, import_drizzle_orm2.eq)(leadFollowupLogs.id, id));
}
async function cancelFollowupLogsForClient(clientId) {
  const db = await getDb();
  if (!db) return;
  await db.update(leadFollowupLogs).set({ status: "cancelled" }).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(leadFollowupLogs.clientId, clientId), (0, import_drizzle_orm2.eq)(leadFollowupLogs.status, "pending")));
}
async function getPendingFollowupLogs() {
  const db = await getDb();
  if (!db) return [];
  const now = /* @__PURE__ */ new Date();
  return db.select().from(leadFollowupLogs).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.eq)(leadFollowupLogs.status, "pending"),
    (0, import_drizzle_orm2.lte)(leadFollowupLogs.scheduledAt, now)
  )).orderBy(leadFollowupLogs.scheduledAt);
}
async function enqueueFollowupSequence(clientId, leadSource) {
  const db = await getDb();
  if (!db) return;
  const sequences = await db.select().from(leadFollowupSequences).where((0, import_drizzle_orm2.eq)(leadFollowupSequences.isActive, true));
  const matchingSequences = sequences.filter(
    (s) => s.triggerSource === "all" || s.triggerSource === leadSource
  );
  if (matchingSequences.length === 0) return;
  const now = /* @__PURE__ */ new Date();
  for (const seq of matchingSequences) {
    const steps = await db.select().from(leadFollowupSteps).where((0, import_drizzle_orm2.eq)(leadFollowupSteps.sequenceId, seq.id)).orderBy(leadFollowupSteps.stepOrder);
    for (const step of steps) {
      const scheduledAt = new Date(now.getTime() + step.delayMinutes * 60 * 1e3);
      await db.insert(leadFollowupLogs).values({
        clientId,
        sequenceId: seq.id,
        stepId: step.id,
        status: "pending",
        scheduledAt
      });
    }
  }
}
async function findClientByEmailOrPhone(email, phone) {
  const db = await getDb();
  if (!db) return null;
  if (!email && !phone) return null;
  const conditions = [];
  if (email) conditions.push((0, import_drizzle_orm2.eq)(clients.email, email));
  if (phone) conditions.push((0, import_drizzle_orm2.eq)(clients.phone, phone));
  const results = await db.select().from(clients).where(conditions.length > 1 ? (0, import_drizzle_orm2.or)(...conditions) : conditions[0]).limit(1);
  return results[0] ?? null;
}
async function findInvoiceBySquareId(squareInvoiceId) {
  const db = await getDb();
  if (!db) return null;
  const results = await db.select().from(invoices).where((0, import_drizzle_orm2.eq)(invoices.squareInvoiceId, squareInvoiceId)).limit(1);
  return results[0] ?? null;
}
async function importClient(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(clients).values(data);
  return { id: Number(result[0].insertId) };
}
async function importInvoice(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(invoices).values(data);
  return { id: Number(result[0].insertId) };
}
async function batchDeleteClients(ids) {
  const db = await getDb();
  if (!db || ids.length === 0) return { deleted: 0 };
  await db.delete(clients).where((0, import_drizzle_orm2.inArray)(clients.id, ids));
  return { deleted: ids.length };
}
async function batchUpdateClientStatus(ids, status) {
  const db = await getDb();
  if (!db || ids.length === 0) return { updated: 0 };
  await db.update(clients).set({ leadStatus: status }).where((0, import_drizzle_orm2.inArray)(clients.id, ids));
  if (status === "active" || status === "past") {
    for (const id of ids) {
      try {
        await db.update(leadFollowupLogs).set({ status: "cancelled" }).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(leadFollowupLogs.clientId, id), (0, import_drizzle_orm2.eq)(leadFollowupLogs.status, "pending")));
      } catch (_) {
      }
    }
  }
  return { updated: ids.length };
}
async function batchDeleteDogs(ids) {
  const db = await getDb();
  if (!db || ids.length === 0) return { deleted: 0 };
  await db.delete(dogs).where((0, import_drizzle_orm2.inArray)(dogs.id, ids));
  return { deleted: ids.length };
}
async function batchUpdateDogStatus(ids, status) {
  const db = await getDb();
  if (!db || ids.length === 0) return { updated: 0 };
  await db.update(dogs).set({ status }).where((0, import_drizzle_orm2.inArray)(dogs.id, ids));
  return { updated: ids.length };
}
async function batchReassignDogTrainer(dogIds, staffId) {
  const db = await getDb();
  if (!db || dogIds.length === 0) return { updated: 0 };
  for (const dogId of dogIds) {
    await db.delete(staffDogAssignments).where(
      (0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(staffDogAssignments.dogId, dogId), (0, import_drizzle_orm2.eq)(staffDogAssignments.role, "primary_trainer"))
    );
    await db.insert(staffDogAssignments).values({
      staffId,
      dogId,
      role: "primary_trainer"
    });
  }
  return { updated: dogIds.length };
}
async function listTransactions(clientId) {
  const db = await getDb();
  if (!db) return [];
  const query = db.select({
    id: transactions.id,
    clientId: transactions.clientId,
    clientFirstName: clients.firstName,
    clientLastName: clients.lastName,
    invoiceId: transactions.invoiceId,
    squarePaymentId: transactions.squarePaymentId,
    squareOrderId: transactions.squareOrderId,
    amount: transactions.amount,
    type: transactions.type,
    status: transactions.status,
    description: transactions.description,
    paymentMethod: transactions.paymentMethod,
    paidAt: transactions.paidAt,
    createdAt: transactions.createdAt
  }).from(transactions).leftJoin(clients, (0, import_drizzle_orm2.eq)(transactions.clientId, clients.id));
  if (clientId) {
    return query.where((0, import_drizzle_orm2.eq)(transactions.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(transactions.createdAt));
  }
  return query.orderBy((0, import_drizzle_orm2.desc)(transactions.createdAt));
}
async function createTransaction(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(transactions).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateTransaction(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(transactions).set(data).where((0, import_drizzle_orm2.eq)(transactions.id, id));
  return { id };
}
async function deleteTransaction(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(transactions).where((0, import_drizzle_orm2.eq)(transactions.id, id));
  return { id };
}
async function getClientFinancialSummary(clientId) {
  const db = await getDb();
  if (!db) return { invoices: [], contracts: [], transactions: [], totals: { invoiced: 0, paid: 0, outstanding: 0, transactionTotal: 0 } };
  const clientInvoices = await db.select().from(invoices).where((0, import_drizzle_orm2.eq)(invoices.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(invoices.createdAt));
  const clientContracts = await db.select().from(contracts).where((0, import_drizzle_orm2.eq)(contracts.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(contracts.createdAt));
  const clientTransactions = await db.select().from(transactions).where((0, import_drizzle_orm2.eq)(transactions.clientId, clientId)).orderBy((0, import_drizzle_orm2.desc)(transactions.createdAt));
  const invoiced = clientInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
  const paid = clientInvoices.filter((inv) => inv.status === "paid").reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
  const outstanding = clientInvoices.filter((inv) => inv.status !== "paid" && inv.status !== "cancelled").reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
  const transactionTotal = clientTransactions.filter((t2) => t2.status === "completed" && t2.type !== "refund").reduce((sum, t2) => sum + parseFloat(t2.amount || "0"), 0);
  return {
    invoices: clientInvoices,
    contracts: clientContracts,
    transactions: clientTransactions,
    totals: { invoiced, paid, outstanding, transactionTotal }
  };
}
async function getSalesPipelineData() {
  const db = await getDb();
  if (!db) return { stages: [], monthlyRevenue: [], predictions: {} };
  const allClients = await db.select().from(clients);
  const allInvoices = await db.select().from(invoices);
  const allTransactions = await db.select().from(transactions);
  const stages = ["new", "contacted", "qualified", "waitlist", "active", "past"].map((status) => {
    const stageClients = allClients.filter((c) => c.leadStatus === status);
    const stageClientIds = new Set(stageClients.map((c) => c.id));
    const stageInvoices = allInvoices.filter((inv) => stageClientIds.has(inv.clientId));
    const stageValue = stageInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
    return { status, count: stageClients.length, value: stageValue };
  });
  const now = /* @__PURE__ */ new Date();
  const monthlyRevenue = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const nextMonth = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    const invRev = allInvoices.filter((inv) => inv.status === "paid" && inv.paidAt && inv.paidAt >= d && inv.paidAt < nextMonth).reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
    const txnRev = allTransactions.filter((t2) => t2.status === "completed" && t2.type !== "refund" && t2.paidAt && t2.paidAt >= d && t2.paidAt < nextMonth).reduce((sum, t2) => sum + parseFloat(t2.amount || "0"), 0);
    monthlyRevenue.push({ month: monthStr, invoiceRevenue: invRev, transactionRevenue: txnRev, total: invRev + txnRev });
  }
  const totalActive = allClients.filter((c) => c.leadStatus === "active").length;
  const totalLeads = allClients.filter((c) => ["new", "contacted", "qualified"].includes(c.leadStatus)).length;
  const conversionRate = allClients.length > 0 ? allClients.filter((c) => c.leadStatus === "active").length / allClients.length : 0;
  const avgDealValue = allInvoices.length > 0 ? allInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0) / allInvoices.length : 0;
  const pipelineValue = allInvoices.filter((inv) => inv.status !== "paid" && inv.status !== "cancelled").reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
  const recentMonths = monthlyRevenue.slice(-3);
  const avgMonthlyRevenue = recentMonths.length > 0 ? recentMonths.reduce((sum, m) => sum + m.total, 0) / recentMonths.length : 0;
  const predictedNextMonth = avgMonthlyRevenue + totalLeads * conversionRate * avgDealValue * 0.3;
  return {
    stages,
    monthlyRevenue,
    predictions: {
      totalActive,
      totalLeads,
      conversionRate: Math.round(conversionRate * 100),
      avgDealValue: Math.round(avgDealValue * 100) / 100,
      pipelineValue: Math.round(pipelineValue * 100) / 100,
      avgMonthlyRevenue: Math.round(avgMonthlyRevenue * 100) / 100,
      predictedNextMonth: Math.round(predictedNextMonth * 100) / 100
    }
  };
}
async function findTransactionBySquareOrderId(squareOrderId) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(transactions).where((0, import_drizzle_orm2.eq)(transactions.squareOrderId, squareOrderId)).limit(1);
  return rows[0] ?? null;
}
async function getProfitAndLossData() {
  const db = await getDb();
  if (!db) return { months: [], summary: { totalRevenue: 0, totalExpenses: 0, netProfit: 0 } };
  const allInvoices = await db.select().from(invoices);
  const allTransactions = await db.select().from(transactions);
  const allTimeEntries = await db.select().from(timeEntries);
  const allStaff = await db.select().from(staffMembers);
  const allExpenses = await db.select().from(expenses);
  const staffRates = /* @__PURE__ */ new Map();
  for (const s of allStaff) {
    staffRates.set(s.id, parseFloat(s.hourlyRate || "15"));
  }
  const now = /* @__PURE__ */ new Date();
  const months = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const nextMonth = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    const invRev = allInvoices.filter((inv) => inv.status === "paid" && inv.paidAt && inv.paidAt >= d && inv.paidAt < nextMonth).reduce((sum, inv) => sum + parseFloat(inv.amount || "0"), 0);
    const txnRev = allTransactions.filter((t2) => t2.status === "completed" && t2.type !== "refund" && t2.paidAt && t2.paidAt >= d && t2.paidAt < nextMonth).reduce((sum, t2) => sum + parseFloat(t2.amount || "0"), 0);
    const refunds = allTransactions.filter((t2) => t2.type === "refund" && t2.paidAt && t2.paidAt >= d && t2.paidAt < nextMonth).reduce((sum, t2) => sum + parseFloat(t2.amount || "0"), 0);
    const totalRevenue2 = invRev + txnRev - refunds;
    const laborCost = allTimeEntries.filter((te) => te.clockIn >= d && te.clockIn < nextMonth && te.totalHours).reduce((sum, te) => {
      const hours = parseFloat(te.totalHours || "0");
      const rate = staffRates.get(te.staffId) ?? 15;
      return sum + hours * rate;
    }, 0);
    const monthExpenses = allExpenses.filter((e) => {
      const eDate = new Date(e.date);
      return eDate >= d && eDate < nextMonth;
    }).reduce((sum, e) => sum + parseFloat(e.amount || "0"), 0);
    const inventoryCost = 0;
    const totalExpenses2 = laborCost + inventoryCost + monthExpenses;
    const netProfit2 = totalRevenue2 - totalExpenses2;
    months.push({
      month: monthStr,
      invoiceRevenue: Math.round(invRev * 100) / 100,
      transactionRevenue: Math.round(txnRev * 100) / 100,
      totalRevenue: Math.round(totalRevenue2 * 100) / 100,
      laborCost: Math.round(laborCost * 100) / 100,
      inventoryCost: Math.round(inventoryCost * 100) / 100,
      otherExpenses: Math.round(monthExpenses * 100) / 100,
      totalExpenses: Math.round(totalExpenses2 * 100) / 100,
      netProfit: Math.round(netProfit2 * 100) / 100
    });
  }
  const totalRevenue = months.reduce((s, m) => s + m.totalRevenue, 0);
  const totalExpenses = months.reduce((s, m) => s + m.totalExpenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  return {
    months,
    summary: {
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      totalExpenses: Math.round(totalExpenses * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100
    }
  };
}
async function listExpenses(filters) {
  const db = await getDb();
  if (!db) return [];
  const conds = [];
  if (filters?.category) conds.push((0, import_drizzle_orm2.eq)(expenses.category, filters.category));
  if (filters?.startDate) conds.push((0, import_drizzle_orm2.gte)(expenses.date, new Date(filters.startDate)));
  if (filters?.endDate) conds.push((0, import_drizzle_orm2.lte)(expenses.date, /* @__PURE__ */ new Date(filters.endDate + "T23:59:59")));
  const q = conds.length > 0 ? db.select().from(expenses).where((0, import_drizzle_orm2.and)(...conds)).orderBy((0, import_drizzle_orm2.desc)(expenses.date)) : db.select().from(expenses).orderBy((0, import_drizzle_orm2.desc)(expenses.date));
  return q;
}
async function createExpense(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(expenses).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateExpense(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(expenses).set(data).where((0, import_drizzle_orm2.eq)(expenses.id, id));
  return { success: true };
}
async function deleteExpense(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(expenses).where((0, import_drizzle_orm2.eq)(expenses.id, id));
  return { success: true };
}
async function getDogDailyLog(dogId, logDate) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(dogDailyLogs).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(dogDailyLogs.dogId, dogId), import_drizzle_orm2.sql`${dogDailyLogs.logDate} = ${logDate}`));
  return rows[0] ?? null;
}
async function listDogDailyLogs(dogId, opts = {}) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [(0, import_drizzle_orm2.eq)(dogDailyLogs.dogId, dogId)];
  if (opts.startDate) conditions.push(import_drizzle_orm2.sql`${dogDailyLogs.logDate} >= ${opts.startDate}`);
  if (opts.endDate) conditions.push(import_drizzle_orm2.sql`${dogDailyLogs.logDate} <= ${opts.endDate}`);
  if (opts.staffId) conditions.push((0, import_drizzle_orm2.eq)(dogDailyLogs.staffId, opts.staffId));
  const rows = await db.select({
    log: dogDailyLogs,
    staffFirstName: staffMembers.firstName,
    staffLastName: staffMembers.lastName
  }).from(dogDailyLogs).leftJoin(staffMembers, (0, import_drizzle_orm2.eq)(dogDailyLogs.staffId, staffMembers.id)).where((0, import_drizzle_orm2.and)(...conditions)).orderBy((0, import_drizzle_orm2.desc)(dogDailyLogs.logDate)).limit(opts.limit ?? 100);
  return rows.map((r) => ({
    ...r.log,
    staffName: r.staffFirstName ? `${r.staffFirstName} ${r.staffLastName ?? ""}`.trim() : null
  }));
}
async function upsertDogDailyLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select({ id: dogDailyLogs.id }).from(dogDailyLogs).where((0, import_drizzle_orm2.and)((0, import_drizzle_orm2.eq)(dogDailyLogs.dogId, data.dogId), import_drizzle_orm2.sql`${dogDailyLogs.logDate} = ${data.logDate}`));
  if (existing.length > 0) {
    const { dogId, logDate, ...updateData } = data;
    await db.update(dogDailyLogs).set(updateData).where((0, import_drizzle_orm2.eq)(dogDailyLogs.id, existing[0].id));
    return { id: existing[0].id, updated: true };
  } else {
    const result = await db.insert(dogDailyLogs).values(data);
    return { id: result[0].insertId, updated: false };
  }
}
async function deleteDogDailyLog(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(dogDailyLogs).where((0, import_drizzle_orm2.eq)(dogDailyLogs.id, id));
  return { success: true };
}
async function createDogLogPhoto(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(media).values({
    entityType: "dog",
    entityId: data.dogId,
    fileUrl: data.fileUrl,
    fileType: `photo|${data.logDate}`,
    isClientVisible: false
  });
  return { id: result[0].insertId, url: data.fileUrl };
}
async function listDogLogPhotos(dogId, logDate) {
  const db = await getDb();
  if (!db) return [];
  const rows = await db.select().from(media).where((0, import_drizzle_orm2.and)(
    (0, import_drizzle_orm2.eq)(media.entityType, "dog"),
    (0, import_drizzle_orm2.eq)(media.entityId, dogId),
    (0, import_drizzle_orm2.eq)(media.fileType, `photo|${logDate}`)
  )).orderBy((0, import_drizzle_orm2.desc)(media.uploadedAt));
  return rows;
}
async function deleteDogLogPhoto(id) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.delete(media).where((0, import_drizzle_orm2.eq)(media.id, id));
  return { success: true };
}
async function getFacilityTask(taskDate) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select({
    task: facilityTasks,
    staffFirstName: staffMembers.firstName,
    staffLastName: staffMembers.lastName
  }).from(facilityTasks).leftJoin(staffMembers, (0, import_drizzle_orm2.eq)(facilityTasks.staffId, staffMembers.id)).where(import_drizzle_orm2.sql`${facilityTasks.taskDate} = ${taskDate}`);
  if (!rows[0]) return null;
  return {
    ...rows[0].task,
    staffName: rows[0].staffFirstName ? `${rows[0].staffFirstName} ${rows[0].staffLastName ?? ""}`.trim() : null
  };
}
async function listFacilityTasks(opts = {}) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (opts.startDate) conditions.push(import_drizzle_orm2.sql`${facilityTasks.taskDate} >= ${opts.startDate}`);
  if (opts.endDate) conditions.push(import_drizzle_orm2.sql`${facilityTasks.taskDate} <= ${opts.endDate}`);
  const rows = await db.select({
    task: facilityTasks,
    staffFirstName: staffMembers.firstName,
    staffLastName: staffMembers.lastName
  }).from(facilityTasks).leftJoin(staffMembers, (0, import_drizzle_orm2.eq)(facilityTasks.staffId, staffMembers.id)).where(conditions.length > 0 ? (0, import_drizzle_orm2.and)(...conditions) : void 0).orderBy((0, import_drizzle_orm2.desc)(facilityTasks.taskDate)).limit(opts.limit ?? 30);
  return rows.map((r) => ({
    ...r.task,
    staffName: r.staffFirstName ? `${r.staffFirstName} ${r.staffLastName ?? ""}`.trim() : null
  }));
}
async function upsertFacilityTask(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select({ id: facilityTasks.id }).from(facilityTasks).where(import_drizzle_orm2.sql`${facilityTasks.taskDate} = ${data.taskDate}`);
  if (existing.length > 0) {
    const { taskDate, ...updateData } = data;
    await db.update(facilityTasks).set(updateData).where((0, import_drizzle_orm2.eq)(facilityTasks.id, existing[0].id));
    return { id: existing[0].id, updated: true };
  } else {
    const result = await db.insert(facilityTasks).values(data);
    return { id: result[0].insertId, updated: false };
  }
}
async function getActiveBoardingDogIds() {
  const db = await getDb();
  if (!db) return [];
  const rows = await db.select({ dogId: boardingReservations.dogId }).from(boardingReservations).where((0, import_drizzle_orm2.eq)(boardingReservations.status, "active"));
  return rows.map((r) => r.dogId);
}
var import_drizzle_orm2;
var init_queries = __esm({
  "server/queries.ts"() {
    "use strict";
    import_drizzle_orm2 = require("drizzle-orm");
    init_db();
    init_schema();
  }
});

// server/_core/notification.ts
async function notifyOwner(payload) {
  const { title, content } = validatePayload(payload);
  if (!ENV.forgeApiUrl) {
    throw new import_server.TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service URL is not configured."
    });
  }
  if (!ENV.forgeApiKey) {
    throw new import_server.TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service API key is not configured."
    });
  }
  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1"
      },
      body: JSON.stringify({ title, content })
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Failed to notify owner (${response.status} ${response.statusText})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }
    return true;
  } catch (error) {
    console.warn("[Notification] Error calling notification service:", error);
    return false;
  }
}
var import_server, TITLE_MAX_LENGTH, CONTENT_MAX_LENGTH, trimValue, isNonEmptyString2, buildEndpointUrl, validatePayload;
var init_notification = __esm({
  "server/_core/notification.ts"() {
    "use strict";
    import_server = require("@trpc/server");
    init_env();
    TITLE_MAX_LENGTH = 1200;
    CONTENT_MAX_LENGTH = 2e4;
    trimValue = (value) => value.trim();
    isNonEmptyString2 = (value) => typeof value === "string" && value.trim().length > 0;
    buildEndpointUrl = (baseUrl) => {
      const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
      return new URL("webdevtoken.v1.WebDevService/SendNotification", normalizedBase).toString();
    };
    validatePayload = (input) => {
      if (!isNonEmptyString2(input.title)) {
        throw new import_server.TRPCError({
          code: "BAD_REQUEST",
          message: "Notification title is required."
        });
      }
      if (!isNonEmptyString2(input.content)) {
        throw new import_server.TRPCError({
          code: "BAD_REQUEST",
          message: "Notification content is required."
        });
      }
      const title = trimValue(input.title);
      const content = trimValue(input.content);
      if (title.length > TITLE_MAX_LENGTH) {
        throw new import_server.TRPCError({
          code: "BAD_REQUEST",
          message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`
        });
      }
      if (content.length > CONTENT_MAX_LENGTH) {
        throw new import_server.TRPCError({
          code: "BAD_REQUEST",
          message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`
        });
      }
      return { title, content };
    };
  }
});

// server/email.ts
function getCredentials() {
  return {
    user: process.env.GMAIL_USER ?? "",
    pass: process.env.GMAIL_APP_PASSWORD ?? ""
  };
}
function isConfigured2() {
  const { user, pass } = getCredentials();
  return !!(user && pass);
}
function getTransporter() {
  const { user, pass } = getCredentials();
  return import_nodemailer.default.createTransport({
    service: "gmail",
    auth: { user, pass }
  });
}
async function sendEmail(params) {
  if (!isConfigured2()) {
    console.warn("[Email] Gmail not configured \u2014 skipping email");
    return { success: false, error: "Gmail SMTP not configured" };
  }
  try {
    const transporter = getTransporter();
    const { user } = getCredentials();
    const recipients = Array.isArray(params.to) ? params.to.join(", ") : params.to;
    const info = await transporter.sendMail({
      from: `"Savage K9 Business OS" <${user}>`,
      to: recipients,
      subject: params.subject,
      text: params.text,
      html: params.html
    });
    console.log(`[Email] Sent to ${recipients}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("[Email] Failed to send:", err.message);
    return { success: false, error: err.message };
  }
}
var import_nodemailer;
var init_email = __esm({
  "server/email.ts"() {
    "use strict";
    import_nodemailer = __toESM(require("nodemailer"));
  }
});

// server/daily-summary-scheduler.ts
var daily_summary_scheduler_exports = {};
__export(daily_summary_scheduler_exports, {
  generateDailySummary: () => generateDailySummary,
  sendDailySummary: () => sendDailySummary,
  startDailySummaryScheduler: () => startDailySummaryScheduler,
  stopDailySummaryScheduler: () => stopDailySummaryScheduler
});
function getLastSentDate() {
  try {
    if ((0, import_fs.existsSync)(LOCK_FILE)) {
      return (0, import_fs.readFileSync)(LOCK_FILE, "utf-8").trim() || null;
    }
  } catch {
  }
  return null;
}
function setLastSentDate(dateStr) {
  try {
    if (!(0, import_fs.existsSync)(LOCK_DIR)) {
      (0, import_fs.mkdirSync)(LOCK_DIR, { recursive: true });
    }
    (0, import_fs.writeFileSync)(LOCK_FILE, dateStr, "utf-8");
  } catch (e) {
    console.warn("[DailySummary] Failed to write lock file:", e);
  }
}
function fmt12h(d) {
  if (!d) return "\u2014";
  const date2 = typeof d === "string" ? new Date(d) : d;
  const h = date2.getHours();
  const m = date2.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}
function formatHours(h) {
  if (!h) return "\u2014";
  return `${parseFloat(String(h)).toFixed(1)}h`;
}
async function generateDailySummary() {
  const data = await getShiftHandoffData();
  const allShifts = data.recentShifts ?? [];
  const shiftsWithNotes = allShifts.filter((s) => s.notes && s.notes.trim());
  const lowStock = data.lowStockItems ?? [];
  const facility = data.facilityStatus;
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const hasAlerts = shiftsWithNotes.length > 0 || lowStock.length > 0 || facility && facility.percentage < 100;
  const textParts = [];
  textParts.push(`DAILY SHIFT SUMMARY \u2014 ${today}`);
  textParts.push("\u2550".repeat(50));
  textParts.push("");
  textParts.push(`Shifts Completed: ${allShifts.length}`);
  textParts.push(`Shifts with Notes: ${shiftsWithNotes.length}`);
  textParts.push(`Low Stock Items: ${lowStock.length}`);
  if (facility) {
    textParts.push(`Facility Tasks: ${facility.percentage}% complete (${facility.completedCount}/${facility.totalCount})`);
  } else {
    textParts.push(`Facility Tasks: Not logged today`);
  }
  textParts.push("");
  if (shiftsWithNotes.length > 0) {
    textParts.push("\u2500\u2500\u2500 SHIFT NOTES \u2500\u2500\u2500");
    for (const shift of shiftsWithNotes) {
      textParts.push(`
${shift.staffName} (${fmt12h(shift.clockIn)} \u2013 ${fmt12h(shift.clockOut)}, ${formatHours(shift.totalHours)}):`);
      textParts.push(`  ${shift.notes}`);
    }
    textParts.push("");
  }
  if (lowStock.length > 0) {
    textParts.push("\u2500\u2500\u2500 \u26A0\uFE0F LOW INVENTORY \u2500\u2500\u2500");
    for (const item of lowStock) {
      textParts.push(`  \u2022 ${item.itemName} (${item.category}): ${item.quantity}${item.unit ? ` ${item.unit}` : ""} remaining (threshold: ${item.lowStockThreshold})`);
    }
    textParts.push("");
  }
  if (allShifts.length > 0) {
    textParts.push("\u2500\u2500\u2500 ALL SHIFTS \u2500\u2500\u2500");
    for (const shift of allShifts) {
      const noteIndicator = shift.notes ? " [has notes]" : "";
      textParts.push(`  \u2022 ${shift.staffName}: ${fmt12h(shift.clockIn)} \u2013 ${fmt12h(shift.clockOut)} (${formatHours(shift.totalHours)})${noteIndicator}`);
    }
    textParts.push("");
  }
  textParts.push("\u2014 Savage K9 Business OS");
  const htmlParts = [];
  htmlParts.push(`
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0A0A0A;color:#F2F2F2;padding:20px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#141414;border-radius:12px;overflow:hidden;border:1px solid #2A2A2A;">
    <!-- Header -->
    <div style="background:#1a1a1a;padding:20px 24px;border-bottom:1px solid #2A2A2A;">
      <h1 style="margin:0;font-size:20px;color:#4ADE80;">Daily Shift Summary</h1>
      <p style="margin:4px 0 0;font-size:14px;color:#8A8A8A;">${today}</p>
    </div>

    <div style="padding:20px 24px;">
      <!-- Stats Grid -->
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
        <div style="flex:1;min-width:120px;background:#1e1e1e;border-radius:8px;padding:12px;border:1px solid #2A2A2A;">
          <div style="font-size:24px;font-weight:700;color:#F2F2F2;">${allShifts.length}</div>
          <div style="font-size:12px;color:#8A8A8A;">Shifts</div>
        </div>
        <div style="flex:1;min-width:120px;background:#1e1e1e;border-radius:8px;padding:12px;border:1px solid #2A2A2A;">
          <div style="font-size:24px;font-weight:700;color:${shiftsWithNotes.length > 0 ? "#FBBF24" : "#4ADE80"};">${shiftsWithNotes.length}</div>
          <div style="font-size:12px;color:#8A8A8A;">Notes</div>
        </div>
        <div style="flex:1;min-width:120px;background:#1e1e1e;border-radius:8px;padding:12px;border:1px solid #2A2A2A;">
          <div style="font-size:24px;font-weight:700;color:${lowStock.length > 0 ? "#F87171" : "#4ADE80"};">${lowStock.length}</div>
          <div style="font-size:12px;color:#8A8A8A;">Low Stock</div>
        </div>
        <div style="flex:1;min-width:120px;background:#1e1e1e;border-radius:8px;padding:12px;border:1px solid #2A2A2A;">
          <div style="font-size:24px;font-weight:700;color:${facility ? facility.percentage === 100 ? "#4ADE80" : facility.percentage >= 50 ? "#FBBF24" : "#F87171" : "#8A8A8A"};">${facility ? `${facility.percentage}%` : "N/A"}</div>
          <div style="font-size:12px;color:#8A8A8A;">Facility</div>
        </div>
      </div>`);
  if (shiftsWithNotes.length > 0) {
    htmlParts.push(`
      <div style="margin-bottom:20px;">
        <h2 style="font-size:16px;color:#FBBF24;margin:0 0 12px;">Shift Notes</h2>`);
    for (const shift of shiftsWithNotes) {
      htmlParts.push(`
        <div style="background:#1e1e1e;border-radius:8px;padding:14px;margin-bottom:8px;border:1px solid #2A2A2A;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <strong style="color:#F2F2F2;">${shift.staffName}</strong>
            <span style="font-size:12px;color:#8A8A8A;">${fmt12h(shift.clockIn)} \u2013 ${fmt12h(shift.clockOut)} (${formatHours(shift.totalHours)})</span>
          </div>
          <p style="margin:0;font-size:14px;color:#d4d4d4;line-height:1.5;">${shift.notes}</p>
        </div>`);
    }
    htmlParts.push(`</div>`);
  }
  if (lowStock.length > 0) {
    htmlParts.push(`
      <div style="margin-bottom:20px;">
        <h2 style="font-size:16px;color:#F87171;margin:0 0 12px;">\u26A0\uFE0F Low Inventory</h2>
        <div style="background:#1e1e1e;border-radius:8px;overflow:hidden;border:1px solid #2A2A2A;">`);
    for (let i = 0; i < lowStock.length; i++) {
      const item = lowStock[i];
      const borderTop = i > 0 ? "border-top:1px solid #2A2A2A;" : "";
      htmlParts.push(`
          <div style="padding:12px 14px;display:flex;justify-content:space-between;align-items:center;${borderTop}">
            <div>
              <div style="font-weight:600;color:#F2F2F2;">${item.itemName}</div>
              <div style="font-size:12px;color:#8A8A8A;">${item.category}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-weight:700;color:#F87171;">${item.quantity}${item.unit ? ` ${item.unit}` : ""}</div>
              <div style="font-size:11px;color:#8A8A8A;">min: ${item.lowStockThreshold}</div>
            </div>
          </div>`);
    }
    htmlParts.push(`</div></div>`);
  }
  if (allShifts.length > 0) {
    htmlParts.push(`
      <div style="margin-bottom:20px;">
        <h2 style="font-size:16px;color:#8A8A8A;margin:0 0 12px;">All Shifts</h2>
        <div style="background:#1e1e1e;border-radius:8px;overflow:hidden;border:1px solid #2A2A2A;">`);
    for (let i = 0; i < allShifts.length; i++) {
      const shift = allShifts[i];
      const borderTop = i > 0 ? "border-top:1px solid #2A2A2A;" : "";
      const noteIcon = shift.notes ? ' <span style="color:#FBBF24;">\u25CF</span>' : "";
      htmlParts.push(`
          <div style="padding:10px 14px;display:flex;justify-content:space-between;align-items:center;${borderTop}">
            <div style="color:#F2F2F2;">${shift.staffName}${noteIcon}</div>
            <div style="font-size:13px;color:#8A8A8A;">${fmt12h(shift.clockIn)} \u2013 ${fmt12h(shift.clockOut)} (${formatHours(shift.totalHours)})</div>
          </div>`);
    }
    htmlParts.push(`</div></div>`);
  }
  htmlParts.push(`
    </div>
    <div style="padding:16px 24px;border-top:1px solid #2A2A2A;text-align:center;">
      <p style="margin:0;font-size:12px;color:#8A8A8A;">Savage K9 Business OS \u2014 Daily Shift Summary</p>
    </div>
  </div>
</body>
</html>`);
  const title = hasAlerts ? `\u26A0\uFE0F Daily Shift Summary \u2014 ${shiftsWithNotes.length} note${shiftsWithNotes.length !== 1 ? "s" : ""}, ${lowStock.length} low stock` : `\u2705 Daily Shift Summary \u2014 All Clear`;
  return {
    title,
    textContent: textParts.join("\n"),
    htmlContent: htmlParts.join(""),
    hasAlerts: !!hasAlerts,
    stats: {
      totalShifts: allShifts.length,
      shiftsWithNotes: shiftsWithNotes.length,
      lowStockCount: lowStock.length,
      facilityPct: facility?.percentage ?? null
    }
  };
}
async function sendDailySummary(recipientEmails) {
  try {
    const summary = await generateDailySummary();
    const emails = recipientEmails ?? DEFAULT_RECIPIENTS;
    let pushSent = false;
    try {
      pushSent = await notifyOwner({
        title: summary.title,
        content: summary.textContent.substring(0, 19e3)
        // respect 20k limit
      });
    } catch (e) {
      console.warn("[DailySummary] Push notification failed:", e);
    }
    let emailSent = false;
    try {
      const emailResult = await sendEmail({
        to: emails,
        subject: summary.title,
        text: summary.textContent,
        html: summary.htmlContent
      });
      emailSent = emailResult.success;
    } catch (e) {
      console.warn("[DailySummary] Email failed:", e);
    }
    console.log(
      `[DailySummary] Sent \u2014 push: ${pushSent}, email: ${emailSent} (to ${emails.join(", ")}), shifts: ${summary.stats.totalShifts}, notes: ${summary.stats.shiftsWithNotes}, lowStock: ${summary.stats.lowStockCount}, facility: ${summary.stats.facilityPct ?? "N/A"}%`
    );
    return {
      success: pushSent || emailSent,
      pushSent,
      emailSent,
      stats: summary.stats
    };
  } catch (err) {
    console.error("[DailySummary] Error generating summary:", err.message);
    return { success: false, pushSent: false, emailSent: false, stats: null, error: err.message };
  }
}
async function checkAndSend() {
  const now = /* @__PURE__ */ new Date();
  const todayStr = now.toISOString().split("T")[0];
  const currentHour = now.getHours();
  const lastSentDate = getLastSentDate();
  if (currentHour >= SUMMARY_HOUR && lastSentDate !== todayStr) {
    console.log(`[DailySummary] Triggering daily summary for ${todayStr}`);
    setLastSentDate(todayStr);
    await sendDailySummary();
  }
}
function startDailySummaryScheduler() {
  if (intervalHandle2) {
    console.log("[DailySummary] Scheduler already running");
    return;
  }
  const lastSent = getLastSentDate();
  console.log(`[DailySummary] Scheduler started (sends daily at ${SUMMARY_HOUR}:00, last sent: ${lastSent ?? "never"})`);
  setTimeout(() => {
    checkAndSend();
    intervalHandle2 = setInterval(checkAndSend, CHECK_INTERVAL_MS);
  }, STARTUP_DELAY_MS);
  intervalHandle2 = setTimeout(() => {
  }, 0);
}
function stopDailySummaryScheduler() {
  if (intervalHandle2) {
    clearInterval(intervalHandle2);
    intervalHandle2 = null;
    console.log("[DailySummary] Scheduler stopped");
  }
}
var import_fs, import_path, DEFAULT_RECIPIENTS, SUMMARY_HOUR, CHECK_INTERVAL_MS, STARTUP_DELAY_MS, intervalHandle2, LOCK_DIR, LOCK_FILE;
var init_daily_summary_scheduler = __esm({
  "server/daily-summary-scheduler.ts"() {
    "use strict";
    init_queries();
    init_notification();
    init_email();
    import_fs = require("fs");
    import_path = require("path");
    DEFAULT_RECIPIENTS = ["packleadermalachi@gmail.com"];
    SUMMARY_HOUR = 21;
    CHECK_INTERVAL_MS = 15 * 60 * 1e3;
    STARTUP_DELAY_MS = 2 * 60 * 1e3;
    intervalHandle2 = null;
    LOCK_DIR = (0, import_path.join)(process.cwd(), ".scheduler");
    LOCK_FILE = (0, import_path.join)(LOCK_DIR, "daily-summary-last-sent.txt");
  }
});

// server/_core/index.ts
var import_config = require("dotenv/config");
var import_express = __toESM(require("express"));
var import_http = require("http");
var import_net = __toESM(require("net"));
var import_express2 = require("@trpc/server/adapters/express");

// shared/const.ts
var COOKIE_NAME = "app_session_id";
var ONE_YEAR_MS = 1e3 * 60 * 60 * 24 * 365;
var AXIOS_TIMEOUT_MS = 3e4;
var UNAUTHED_ERR_MSG = "Please login (10001)";
var NOT_ADMIN_ERR_MSG = "You do not have required permission (10002)";
var NOT_STAFF_ADMIN_ERR_MSG = "Access restricted to owners, admins, and managers (10003)";

// server/_core/oauth.ts
init_db();

// server/_core/cookies.ts
var LOCAL_HOSTS = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "::1"]);
function isIpAddress(host) {
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
  return host.includes(":");
}
function isSecureRequest(req) {
  if (req.protocol === "https") return true;
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (!forwardedProto) return false;
  const protoList = Array.isArray(forwardedProto) ? forwardedProto : forwardedProto.split(",");
  return protoList.some((proto) => proto.trim().toLowerCase() === "https");
}
function getParentDomain(hostname) {
  if (LOCAL_HOSTS.has(hostname) || isIpAddress(hostname)) {
    return void 0;
  }
  const parts = hostname.split(".");
  if (parts.length < 3) {
    return void 0;
  }
  return "." + parts.slice(-2).join(".");
}
function getSessionCookieOptions(req) {
  const hostname = req.hostname;
  const domain = getParentDomain(hostname);
  return {
    domain,
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: isSecureRequest(req)
  };
}

// shared/_core/errors.ts
var HttpError = class extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
};
var ForbiddenError = (msg) => new HttpError(403, msg);

// server/_core/sdk.ts
var import_axios = __toESM(require("axios"));
var import_cookie = require("cookie");
var import_jose = require("jose");
init_db();
init_env();
var isNonEmptyString = (value) => typeof value === "string" && value.length > 0;
var EXCHANGE_TOKEN_PATH = `/webdev.v1.WebDevAuthPublicService/ExchangeToken`;
var GET_USER_INFO_PATH = `/webdev.v1.WebDevAuthPublicService/GetUserInfo`;
var GET_USER_INFO_WITH_JWT_PATH = `/webdev.v1.WebDevAuthPublicService/GetUserInfoWithJwt`;
var OAuthService = class {
  constructor(client) {
    this.client = client;
    console.log("[OAuth] Initialized with baseURL:", ENV.oAuthServerUrl);
    if (!ENV.oAuthServerUrl) {
      console.error(
        "[OAuth] ERROR: OAUTH_SERVER_URL is not configured! Set OAUTH_SERVER_URL environment variable."
      );
    }
  }
  decodeState(state) {
    const redirectUri = atob(state);
    return redirectUri;
  }
  async getTokenByCode(code, state) {
    const payload = {
      clientId: ENV.appId,
      grantType: "authorization_code",
      code,
      redirectUri: this.decodeState(state)
    };
    const { data } = await this.client.post(EXCHANGE_TOKEN_PATH, payload);
    return data;
  }
  async getUserInfoByToken(token) {
    const { data } = await this.client.post(GET_USER_INFO_PATH, {
      accessToken: token.accessToken
    });
    return data;
  }
};
var createOAuthHttpClient = () => import_axios.default.create({
  baseURL: ENV.oAuthServerUrl,
  timeout: AXIOS_TIMEOUT_MS
});
var SDKServer = class {
  client;
  oauthService;
  constructor(client = createOAuthHttpClient()) {
    this.client = client;
    this.oauthService = new OAuthService(this.client);
  }
  deriveLoginMethod(platforms, fallback) {
    if (fallback && fallback.length > 0) return fallback;
    if (!Array.isArray(platforms) || platforms.length === 0) return null;
    const set = new Set(platforms.filter((p) => typeof p === "string"));
    if (set.has("REGISTERED_PLATFORM_EMAIL")) return "email";
    if (set.has("REGISTERED_PLATFORM_GOOGLE")) return "google";
    if (set.has("REGISTERED_PLATFORM_APPLE")) return "apple";
    if (set.has("REGISTERED_PLATFORM_MICROSOFT") || set.has("REGISTERED_PLATFORM_AZURE"))
      return "microsoft";
    if (set.has("REGISTERED_PLATFORM_GITHUB")) return "github";
    const first = Array.from(set)[0];
    return first ? first.toLowerCase() : null;
  }
  /**
   * Exchange OAuth authorization code for access token
   * @example
   * const tokenResponse = await sdk.exchangeCodeForToken(code, state);
   */
  async exchangeCodeForToken(code, state) {
    return this.oauthService.getTokenByCode(code, state);
  }
  /**
   * Get user information using access token
   * @example
   * const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);
   */
  async getUserInfo(accessToken) {
    const data = await this.oauthService.getUserInfoByToken({
      accessToken
    });
    const loginMethod = this.deriveLoginMethod(
      data?.platforms,
      data?.platform ?? data.platform ?? null
    );
    return {
      ...data,
      platform: loginMethod,
      loginMethod
    };
  }
  parseCookies(cookieHeader) {
    if (!cookieHeader) {
      return /* @__PURE__ */ new Map();
    }
    const parsed = (0, import_cookie.parse)(cookieHeader);
    return new Map(Object.entries(parsed));
  }
  getSessionSecret() {
    const secret = ENV.cookieSecret;
    return new TextEncoder().encode(secret);
  }
  /**
   * Create a session token for a Manus user openId
   * @example
   * const sessionToken = await sdk.createSessionToken(userInfo.openId);
   */
  async createSessionToken(openId, options = {}) {
    return this.signSession(
      {
        openId,
        appId: ENV.appId,
        name: options.name || ""
      },
      options
    );
  }
  async signSession(payload, options = {}) {
    const issuedAt = Date.now();
    const expiresInMs = options.expiresInMs ?? ONE_YEAR_MS;
    const expirationSeconds = Math.floor((issuedAt + expiresInMs) / 1e3);
    const secretKey = this.getSessionSecret();
    return new import_jose.SignJWT({
      openId: payload.openId,
      appId: payload.appId,
      name: payload.name
    }).setProtectedHeader({ alg: "HS256", typ: "JWT" }).setExpirationTime(expirationSeconds).sign(secretKey);
  }
  async verifySession(cookieValue) {
    if (!cookieValue) {
      console.warn("[Auth] Missing session cookie");
      return null;
    }
    try {
      const secretKey = this.getSessionSecret();
      const { payload } = await (0, import_jose.jwtVerify)(cookieValue, secretKey, {
        algorithms: ["HS256"]
      });
      const { openId, appId, name } = payload;
      if (!isNonEmptyString(openId) || !isNonEmptyString(appId) || !isNonEmptyString(name)) {
        console.warn("[Auth] Session payload missing required fields");
        return null;
      }
      return {
        openId,
        appId,
        name
      };
    } catch (error) {
      console.warn("[Auth] Session verification failed", String(error));
      return null;
    }
  }
  async getUserInfoWithJwt(jwtToken) {
    const payload = {
      jwtToken,
      projectId: ENV.appId
    };
    const { data } = await this.client.post(
      GET_USER_INFO_WITH_JWT_PATH,
      payload
    );
    const loginMethod = this.deriveLoginMethod(
      data?.platforms,
      data?.platform ?? data.platform ?? null
    );
    return {
      ...data,
      platform: loginMethod,
      loginMethod
    };
  }
  async authenticateRequest(req) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    let token;
    if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
      token = authHeader.slice("Bearer ".length).trim();
    }
    const cookies = this.parseCookies(req.headers.cookie);
    const sessionCookie = token || cookies.get(COOKIE_NAME);
    const session = await this.verifySession(sessionCookie);
    if (!session) {
      throw ForbiddenError("Invalid session cookie");
    }
    const sessionUserId = session.openId;
    const signedInAt = /* @__PURE__ */ new Date();
    let user = await getUserByOpenId(sessionUserId);
    if (!user) {
      try {
        const userInfo = await this.getUserInfoWithJwt(sessionCookie ?? "");
        await upsertUser({
          openId: userInfo.openId,
          name: userInfo.name || null,
          email: userInfo.email ?? null,
          loginMethod: userInfo.loginMethod ?? userInfo.platform ?? null,
          lastSignedIn: signedInAt
        });
        user = await getUserByOpenId(userInfo.openId);
      } catch (error) {
        console.error("[Auth] Failed to sync user from OAuth:", error);
        throw ForbiddenError("Failed to sync user info");
      }
    }
    if (!user) {
      throw ForbiddenError("User not found");
    }
    await upsertUser({
      openId: user.openId,
      lastSignedIn: signedInAt
    });
    return user;
  }
};
var sdk = new SDKServer();

// server/_core/oauth.ts
function getQueryParam(req, key) {
  const value = req.query[key];
  return typeof value === "string" ? value : void 0;
}
async function syncUser(userInfo) {
  if (!userInfo.openId) {
    throw new Error("openId missing from user info");
  }
  const lastSignedIn = /* @__PURE__ */ new Date();
  await upsertUser({
    openId: userInfo.openId,
    name: userInfo.name || null,
    email: userInfo.email ?? null,
    loginMethod: userInfo.loginMethod ?? userInfo.platform ?? null,
    lastSignedIn
  });
  const saved = await getUserByOpenId(userInfo.openId);
  return saved ?? {
    openId: userInfo.openId,
    name: userInfo.name,
    email: userInfo.email,
    loginMethod: userInfo.loginMethod ?? null,
    lastSignedIn
  };
}
function buildUserResponse(user) {
  return {
    id: user?.id ?? null,
    openId: user?.openId ?? null,
    name: user?.name ?? null,
    email: user?.email ?? null,
    loginMethod: user?.loginMethod ?? null,
    lastSignedIn: (user?.lastSignedIn ?? /* @__PURE__ */ new Date()).toISOString()
  };
}
function registerOAuthRoutes(app) {
  app.get("/api/oauth/callback", async (req, res) => {
    const code = getQueryParam(req, "code");
    const state = getQueryParam(req, "state");
    if (!code || !state) {
      res.status(400).json({ error: "code and state are required" });
      return;
    }
    try {
      const tokenResponse = await sdk.exchangeCodeForToken(code, state);
      const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);
      await syncUser(userInfo);
      const sessionToken = await sdk.createSessionToken(userInfo.openId, {
        name: userInfo.name || "",
        expiresInMs: ONE_YEAR_MS
      });
      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
      const frontendUrl = process.env.EXPO_WEB_PREVIEW_URL || process.env.EXPO_PACKAGER_PROXY_URL || "http://localhost:8081";
      res.redirect(302, frontendUrl);
    } catch (error) {
      console.error("[OAuth] Callback failed", error);
      res.status(500).json({ error: "OAuth callback failed" });
    }
  });
  app.get("/api/oauth/mobile", async (req, res) => {
    const code = getQueryParam(req, "code");
    const state = getQueryParam(req, "state");
    if (!code || !state) {
      res.status(400).json({ error: "code and state are required" });
      return;
    }
    try {
      const tokenResponse = await sdk.exchangeCodeForToken(code, state);
      const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);
      const user = await syncUser(userInfo);
      const sessionToken = await sdk.createSessionToken(userInfo.openId, {
        name: userInfo.name || "",
        expiresInMs: ONE_YEAR_MS
      });
      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });
      res.json({
        app_session_id: sessionToken,
        user: buildUserResponse(user)
      });
    } catch (error) {
      console.error("[OAuth] Mobile exchange failed", error);
      res.status(500).json({ error: "OAuth mobile exchange failed" });
    }
  });
  app.post("/api/auth/logout", (req, res) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
  app.get("/api/auth/me", async (req, res) => {
    try {
      const user = await sdk.authenticateRequest(req);
      res.json({ user: buildUserResponse(user) });
    } catch (error) {
      console.error("[Auth] /api/auth/me failed:", error);
      res.status(401).json({ error: "Not authenticated", user: null });
    }
  });
  app.post("/api/auth/session", async (req, res) => {
    try {
      const user = await sdk.authenticateRequest(req);
      const authHeader = req.headers.authorization || req.headers.Authorization;
      if (typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
        res.status(400).json({ error: "Bearer token required" });
        return;
      }
      const token = authHeader.slice("Bearer ".length).trim();
      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, token, { ...cookieOptions, maxAge: ONE_YEAR_MS });
      res.json({ success: true, user: buildUserResponse(user) });
    } catch (error) {
      console.error("[Auth] /api/auth/session failed:", error);
      res.status(401).json({ error: "Invalid token" });
    }
  });
}

// server/meta-webhook.ts
init_db();
init_schema();
init_queries();
async function fetchLeadData(leadgenId) {
  const accessToken = process.env.META_PAGE_ACCESS_TOKEN;
  if (!accessToken) {
    console.error("[Meta Webhook] META_PAGE_ACCESS_TOKEN not set");
    return null;
  }
  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${leadgenId}?access_token=${accessToken}`
    );
    if (!response.ok) {
      const error = await response.text();
      console.error("[Meta Webhook] Graph API error:", error);
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error("[Meta Webhook] Fetch error:", err);
    return null;
  }
}
function extractField(fieldData, ...names) {
  for (const name of names) {
    const field = fieldData.find(
      (f) => f.name.toLowerCase() === name.toLowerCase()
    );
    if (field && field.values.length > 0) {
      return field.values[0];
    }
  }
  return null;
}
async function processLead(leadgenId) {
  const leadData = await fetchLeadData(leadgenId);
  if (!leadData) {
    return { success: false, error: "Could not fetch lead data from Meta" };
  }
  const fields = leadData.field_data;
  const fullName = extractField(fields, "full_name", "name");
  const firstName = extractField(fields, "first_name");
  const lastName = extractField(fields, "last_name");
  const email = extractField(fields, "email", "email_address");
  const phone = extractField(fields, "phone_number", "phone", "mobile_number");
  const city = extractField(fields, "city", "location");
  const dogBreed = extractField(fields, "dog_breed", "breed", "pet_breed");
  const dogName = extractField(fields, "dog_name", "pet_name");
  const serviceInterest = extractField(fields, "service", "program", "interest", "service_interest");
  const message = extractField(fields, "message", "notes", "comments", "additional_info");
  let fName = firstName || "";
  let lName = lastName || "";
  if (!fName && !lName && fullName) {
    const parts = fullName.split(" ");
    fName = parts[0] || "";
    lName = parts.slice(1).join(" ") || "";
  }
  if (!fName && !lName) {
    fName = email || phone || `Meta Lead`;
    lName = leadgenId;
  }
  const notesParts = [
    `[Auto-imported from Meta Lead Ads]`,
    `Lead ID: ${leadgenId}`,
    leadData.ad_id ? `Ad ID: ${leadData.ad_id}` : null,
    leadData.form_id ? `Form ID: ${leadData.form_id}` : null,
    dogBreed ? `Dog Breed: ${dogBreed}` : null,
    dogName ? `Dog Name: ${dogName}` : null,
    serviceInterest ? `Service Interest: ${serviceInterest}` : null,
    message ? `Message: ${message}` : null
  ].filter(Boolean);
  try {
    const db = await getDb();
    if (!db) return { success: false, error: "Database not available" };
    const [newClient] = await db.insert(clients).values({
      firstName: fName,
      lastName: lName,
      email: email || null,
      phone: phone || null,
      leadSource: "meta",
      leadStatus: "new",
      notes: notesParts.join("\n")
    });
    const clientId = Number(newClient.insertId);
    console.log(`[Meta Webhook] Created client #${clientId} from lead ${leadgenId}: ${fName} ${lName}`);
    try {
      await enqueueFollowupSequence(clientId, "meta");
      console.log(`[Meta Webhook] Follow-up sequence enqueued for client #${clientId}`);
    } catch (seqErr) {
      console.error(`[Meta Webhook] Failed to enqueue follow-up for client #${clientId}:`, seqErr.message);
    }
    return { success: true, clientId };
  } catch (err) {
    console.error("[Meta Webhook] DB insert error:", err);
    return { success: false, error: err.message };
  }
}
function registerMetaWebhookRoutes(app) {
  const verifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN || "savage_k9_meta_verify";
  app.get("/api/webhooks/meta-leads", (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    if (mode === "subscribe" && token === verifyToken) {
      console.log("[Meta Webhook] Verification successful");
      res.status(200).send(challenge);
    } else {
      console.warn("[Meta Webhook] Verification failed - token mismatch");
      res.sendStatus(403);
    }
  });
  app.post("/api/webhooks/meta-leads", async (req, res) => {
    try {
      const payload = req.body;
      if (payload.object !== "page") {
        res.sendStatus(200);
        return;
      }
      for (const entry of payload.entry || []) {
        for (const change of entry.changes || []) {
          if (change.field === "leadgen") {
            const leadgenId = change.value.leadgen_id;
            console.log(`[Meta Webhook] Received lead: ${leadgenId}`);
            processLead(leadgenId).then((result) => {
              if (result.success) {
                console.log(`[Meta Webhook] Lead ${leadgenId} processed -> Client #${result.clientId}`);
              } else {
                console.error(`[Meta Webhook] Lead ${leadgenId} failed: ${result.error}`);
              }
            });
          }
        }
      }
      res.sendStatus(200);
    } catch (err) {
      console.error("[Meta Webhook] Error processing webhook:", err);
      res.sendStatus(200);
    }
  });
  app.post("/api/webhooks/meta-leads/test", async (req, res) => {
    try {
      const { name, email, phone, notes } = req.body;
      const db = await getDb();
      if (!db) {
        res.status(500).json({ success: false, error: "Database not available" });
        return;
      }
      const nameParts = (name || "Test Meta Lead").split(" ");
      const [newClient] = await db.insert(clients).values({
        firstName: nameParts[0] || "Test",
        lastName: nameParts.slice(1).join(" ") || "Meta Lead",
        email: email || null,
        phone: phone || null,
        leadSource: "meta",
        leadStatus: "new",
        notes: notes || "[Test lead created via manual endpoint]"
      });
      const testClientId = Number(newClient.insertId);
      try {
        await enqueueFollowupSequence(testClientId, "meta");
      } catch (seqErr) {
        console.error(`[Meta Webhook] Failed to enqueue follow-up for test client #${testClientId}:`, seqErr.message);
      }
      res.json({
        success: true,
        clientId: testClientId,
        message: "Test lead created successfully (follow-up sequence enqueued)"
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  });
  app.get("/api/webhooks/meta-leads/status", (_req, res) => {
    const hasPageToken = !!process.env.META_PAGE_ACCESS_TOKEN;
    const webhookUrl = `${process.env.API_BASE_URL || "https://your-api-domain"}/api/webhooks/meta-leads`;
    res.json({
      configured: hasPageToken,
      webhookUrl,
      verifyToken,
      instructions: {
        step1: "Go to Meta Business Suite > Business Settings > Integrations > Leads Access",
        step2: `Set webhook URL to: ${webhookUrl}`,
        step3: `Set verify token to: ${verifyToken}`,
        step4: "Subscribe to 'leadgen' events for your page",
        step5: hasPageToken ? "Page Access Token is configured" : "Set META_PAGE_ACCESS_TOKEN env variable with your Page Access Token"
      }
    });
  });
  console.log("[Meta Webhook] Routes registered at /api/webhooks/meta-leads");
}

// server/meta-import.ts
init_db();
init_schema();
init_queries();
var import_drizzle_orm3 = require("drizzle-orm");
var GRAPH_API_BASE = "https://graph.facebook.com/v19.0";
function extractField2(fieldData, ...names) {
  for (const name of names) {
    const field = fieldData.find(
      (f) => f.name.toLowerCase() === name.toLowerCase()
    );
    if (field && field.values.length > 0) {
      return field.values[0];
    }
  }
  return null;
}
async function fetchLeadForms(pageId, accessToken) {
  const forms = [];
  let url = `${GRAPH_API_BASE}/${pageId}/leadgen_forms?access_token=${accessToken}&fields=id,name,status,leads_count,created_time&limit=100`;
  while (url) {
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Graph API error fetching forms: ${err}`);
    }
    const data = await response.json();
    forms.push(...data.data || []);
    url = data.paging?.next || "";
  }
  return forms;
}
async function fetchFormLeads(formId, accessToken) {
  const leads = [];
  let url = `${GRAPH_API_BASE}/${formId}/leads?access_token=${accessToken}&fields=id,created_time,field_data,ad_id,form_id&limit=100`;
  while (url) {
    const response = await fetch(url);
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Graph API error fetching leads: ${err}`);
    }
    const data = await response.json();
    leads.push(...data.data || []);
    url = data.paging?.next || "";
  }
  return leads;
}
async function findExistingClient(db, email, phone) {
  if (!email && !phone) return null;
  const conditions = [];
  if (email) conditions.push((0, import_drizzle_orm3.eq)(clients.email, email));
  if (phone) conditions.push((0, import_drizzle_orm3.eq)(clients.phone, phone));
  const existing = await db.select({ id: clients.id }).from(clients).where(conditions.length === 1 ? conditions[0] : (0, import_drizzle_orm3.or)(...conditions)).limit(1);
  return existing.length > 0 ? existing[0].id : null;
}
async function importSingleLead(db, lead, enrollFollowup) {
  const fields = lead.field_data;
  const fullName = extractField2(fields, "full_name", "name");
  const firstName = extractField2(fields, "first_name");
  const lastName = extractField2(fields, "last_name");
  const email = extractField2(fields, "email", "email_address");
  const phone = extractField2(fields, "phone_number", "phone", "mobile_number");
  const dogBreed = extractField2(fields, "dog_breed", "breed", "pet_breed");
  const dogName = extractField2(fields, "dog_name", "pet_name");
  const serviceInterest = extractField2(fields, "service", "program", "interest", "service_interest");
  const message = extractField2(fields, "message", "notes", "comments", "additional_info");
  const city = extractField2(fields, "city", "location");
  let fName = firstName || "";
  let lName = lastName || "";
  if (!fName && !lName && fullName) {
    const parts = fullName.split(" ");
    fName = parts[0] || "";
    lName = parts.slice(1).join(" ") || "";
  }
  if (!fName && !lName) {
    fName = email || phone || "Meta Lead";
    lName = lead.id;
  }
  const displayName = `${fName} ${lName}`.trim();
  const existingId = await findExistingClient(db, email, phone);
  if (existingId) {
    return { status: "skipped", reason: "Already exists in CRM", clientId: existingId, name: displayName };
  }
  const notesParts = [
    `[Bulk imported from Meta Lead Ads]`,
    `Lead ID: ${lead.id}`,
    `Created: ${lead.created_time}`,
    lead.ad_id ? `Ad ID: ${lead.ad_id}` : null,
    lead.form_id ? `Form ID: ${lead.form_id}` : null,
    dogBreed ? `Dog Breed: ${dogBreed}` : null,
    dogName ? `Dog Name: ${dogName}` : null,
    serviceInterest ? `Service Interest: ${serviceInterest}` : null,
    city ? `City: ${city}` : null,
    message ? `Message: ${message}` : null
  ].filter(Boolean);
  try {
    const [newClient] = await db.insert(clients).values({
      firstName: fName,
      lastName: lName,
      email: email || null,
      phone: phone || null,
      leadSource: "meta",
      leadStatus: "new",
      notes: notesParts.join("\n")
    });
    const clientId = Number(newClient.insertId);
    if (enrollFollowup) {
      try {
        await enqueueFollowupSequence(clientId, "meta");
      } catch (seqErr) {
        console.warn(`[Meta Import] Follow-up enqueue failed for client #${clientId}:`, seqErr.message);
      }
    }
    return { status: "imported", clientId, name: displayName };
  } catch (err) {
    return { status: "error", reason: err.message, name: displayName };
  }
}
function registerMetaImportRoutes(app) {
  app.get("/api/meta-import/forms", async (_req, res) => {
    const accessToken = process.env.META_PAGE_ACCESS_TOKEN;
    const pageId = process.env.META_PAGE_ID;
    if (!accessToken) {
      res.status(400).json({ error: "META_PAGE_ACCESS_TOKEN not configured" });
      return;
    }
    if (!pageId) {
      res.status(400).json({ error: "META_PAGE_ID not configured. Set it in Settings > Secrets." });
      return;
    }
    try {
      const forms = await fetchLeadForms(pageId, accessToken);
      res.json({ forms });
    } catch (err) {
      console.error("[Meta Import] Error fetching forms:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  app.get("/api/meta-import/preview/:formId", async (req, res) => {
    const accessToken = process.env.META_PAGE_ACCESS_TOKEN;
    if (!accessToken) {
      res.status(400).json({ error: "META_PAGE_ACCESS_TOKEN not configured" });
      return;
    }
    try {
      const leads = await fetchFormLeads(req.params.formId, accessToken);
      const db = await getDb();
      if (!db) {
        res.status(500).json({ error: "Database not available" });
        return;
      }
      const preview = await Promise.all(
        leads.map(async (lead) => {
          const email = extractField2(lead.field_data, "email", "email_address");
          const phone = extractField2(lead.field_data, "phone_number", "phone", "mobile_number");
          const fullName = extractField2(lead.field_data, "full_name", "name");
          const firstName = extractField2(lead.field_data, "first_name");
          const lastName = extractField2(lead.field_data, "last_name");
          let name = "";
          if (firstName || lastName) {
            name = `${firstName || ""} ${lastName || ""}`.trim();
          } else if (fullName) {
            name = fullName;
          } else {
            name = email || phone || "Unknown";
          }
          const existingId = await findExistingClient(db, email, phone);
          return {
            leadId: lead.id,
            name,
            email,
            phone,
            createdTime: lead.created_time,
            alreadyImported: !!existingId,
            existingClientId: existingId
          };
        })
      );
      const newCount = preview.filter((p) => !p.alreadyImported).length;
      const existingCount = preview.filter((p) => p.alreadyImported).length;
      res.json({
        formId: req.params.formId,
        totalLeads: leads.length,
        newLeads: newCount,
        existingLeads: existingCount,
        leads: preview
      });
    } catch (err) {
      console.error("[Meta Import] Error previewing leads:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  app.post("/api/meta-import/import", async (req, res) => {
    const accessToken = process.env.META_PAGE_ACCESS_TOKEN;
    const pageId = process.env.META_PAGE_ID;
    if (!accessToken) {
      res.status(400).json({ error: "META_PAGE_ACCESS_TOKEN not configured" });
      return;
    }
    const { formId, enrollFollowup = true } = req.body;
    try {
      const db = await getDb();
      if (!db) {
        res.status(500).json({ error: "Database not available" });
        return;
      }
      let allLeads = [];
      if (formId) {
        allLeads = await fetchFormLeads(formId, accessToken);
      } else if (pageId) {
        const forms = await fetchLeadForms(pageId, accessToken);
        for (const form of forms) {
          const formLeads = await fetchFormLeads(form.id, accessToken);
          allLeads.push(...formLeads);
        }
      } else {
        res.status(400).json({ error: "Provide formId or set META_PAGE_ID for all-forms import" });
        return;
      }
      console.log(`[Meta Import] Starting import of ${allLeads.length} leads...`);
      const result = {
        total: allLeads.length,
        imported: 0,
        skipped: 0,
        errors: 0,
        details: []
      };
      for (const lead of allLeads) {
        const importResult = await importSingleLead(db, lead, enrollFollowup);
        result.details.push({
          leadId: lead.id,
          name: importResult.name,
          status: importResult.status,
          reason: importResult.reason,
          clientId: importResult.clientId
        });
        if (importResult.status === "imported") result.imported++;
        else if (importResult.status === "skipped") result.skipped++;
        else result.errors++;
      }
      console.log(
        `[Meta Import] Complete: ${result.imported} imported, ${result.skipped} skipped, ${result.errors} errors`
      );
      res.json(result);
    } catch (err) {
      console.error("[Meta Import] Import error:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  console.log("[Meta Import] Routes registered at /api/meta-import/*");
}

// server/followup-scheduler.ts
init_db();
init_schema();
var import_drizzle_orm4 = require("drizzle-orm");

// server/twilio.ts
var TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID ?? "";
var TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN ?? "";
var TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER ?? "";
var TWILIO_API_BASE = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}`;
function getAuthHeader() {
  return `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64")}`;
}
function isConfigured() {
  return !!(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_PHONE_NUMBER);
}
async function sendSMS(params) {
  if (!isConfigured()) {
    console.warn("[Twilio] Not configured \u2014 skipping SMS");
    return { success: false, error: "Twilio not configured" };
  }
  let toNumber = params.to.replace(/[^+\d]/g, "");
  if (!toNumber.startsWith("+")) {
    toNumber = "+1" + toNumber;
  }
  try {
    const formData = new URLSearchParams();
    formData.append("To", toNumber);
    formData.append("From", TWILIO_PHONE_NUMBER);
    formData.append("Body", params.body);
    const response = await fetch(`${TWILIO_API_BASE}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });
    const data = await response.json();
    if (response.ok) {
      return { success: true, messageSid: data.sid };
    } else {
      console.error("[Twilio] SMS failed:", data.message || data.code);
      return { success: false, error: data.message || `Error ${data.code}` };
    }
  } catch (err) {
    console.error("[Twilio] SMS error:", err.message);
    return { success: false, error: err.message };
  }
}
async function sendAppointmentReminder(params) {
  const timeLabel = params.hoursUntil <= 1 ? "in 1 hour" : params.hoursUntil <= 24 ? "tomorrow" : `in ${Math.round(params.hoursUntil / 24)} days`;
  const body = `\u{1F43E} Savage K9 Reminder

Hi ${params.clientName}, this is a reminder that ${params.dogName}'s ${params.appointmentType} session is ${timeLabel}.

\u{1F4C5} ${params.dateTime}

If you need to reschedule, please contact us ASAP.

\u2014 Savage K9 Team`;
  return sendSMS({ to: params.clientPhone, body });
}
async function sendBridgingReminder(params) {
  const timeLabel = params.hoursUntil <= 1 ? "in 1 hour" : "tomorrow";
  const body = `\u{1F43E} Savage K9 Bridging Session

Hi ${params.clientName}, ${params.dogName}'s "${params.sessionTitle}" bridging session is ${timeLabel}.

\u{1F4C5} ${params.dateTime}

Please arrive 5 minutes early. Bring your dog on leash.

\u2014 Savage K9 Team`;
  return sendSMS({ to: params.clientPhone, body });
}
async function sendPaymentReminder(params) {
  const formattedAmount = `$${params.amount.toFixed(2)}`;
  const urgency = params.isOverdue ? "OVERDUE" : "due soon";
  const payLink = params.paymentUrl ? `

Pay now: ${params.paymentUrl}` : "";
  const body = `\u{1F43E} Savage K9 Payment ${params.isOverdue ? "Notice" : "Reminder"}

Hi ${params.clientName}, Invoice #${params.invoiceId} for ${formattedAmount} is ${urgency}.

\u{1F4C5} Due: ${params.dueDate}${payLink}

Questions? Reply to this message or contact us directly.

\u2014 Savage K9 Team`;
  return sendSMS({ to: params.clientPhone, body });
}
async function sendHealthRecordReminder(params) {
  const urgency = params.daysUntilIntake <= 1 ? "TOMORROW" : `in ${params.daysUntilIntake} days`;
  const body = `\u{1F43E} Savage K9 Health Records

Hi ${params.clientName}, ${params.dogName}'s intake is ${urgency} (${params.intakeDate}).

Please submit:
\u2705 Up-to-date vaccine records
\u2705 Clear fecal result (within 7 days of intake)

Upload through the Savage K9 app or reply to this message.

\u2014 Savage K9 Team`;
  return sendSMS({ to: params.clientPhone, body });
}
async function listRecentMessages(limit = 20) {
  if (!isConfigured()) return [];
  try {
    const response = await fetch(
      `${TWILIO_API_BASE}/Messages.json?PageSize=${limit}`,
      {
        headers: { Authorization: getAuthHeader() }
      }
    );
    if (!response.ok) return [];
    const data = await response.json();
    return (data.messages || []).map((m) => ({
      sid: m.sid,
      to: m.to,
      from: m.from,
      body: m.body,
      status: m.status,
      dateSent: m.date_sent,
      direction: m.direction
    }));
  } catch {
    return [];
  }
}

// server/followup-scheduler.ts
init_queries();
var POLL_INTERVAL_MS = 6e4;
var intervalHandle = null;
async function resolveTemplate(template, clientId) {
  const db = await getDb();
  if (!db) return template;
  const [client] = await db.select().from(clients).where((0, import_drizzle_orm4.eq)(clients.id, clientId));
  if (!client) return template;
  const clientDogs = await db.select().from(dogs).where((0, import_drizzle_orm4.eq)(dogs.clientId, clientId));
  const firstDog = clientDogs[0];
  let resolved = template;
  resolved = resolved.replace(/\{\{firstName\}\}/g, client.firstName || "there");
  resolved = resolved.replace(/\{\{lastName\}\}/g, client.lastName || "");
  resolved = resolved.replace(/\{\{fullName\}\}/g, `${client.firstName || ""} ${client.lastName || ""}`.trim() || "there");
  resolved = resolved.replace(/\{\{email\}\}/g, client.email || "");
  resolved = resolved.replace(/\{\{phone\}\}/g, client.phone || "");
  resolved = resolved.replace(/\{\{dogName\}\}/g, firstDog?.name || "your dog");
  resolved = resolved.replace(/\{\{dogBreed\}\}/g, firstDog?.breed || "");
  return resolved;
}
async function processPendingFollowups() {
  try {
    const pendingLogs = await getPendingFollowupLogs();
    if (pendingLogs.length === 0) return;
    console.log(`[Followup Scheduler] Processing ${pendingLogs.length} pending messages`);
    const db = await getDb();
    if (!db) return;
    for (const log of pendingLogs) {
      try {
        const steps = await listFollowupSteps(log.sequenceId);
        const step = steps.find((s) => s.id === log.stepId);
        if (!step) {
          await updateFollowupLog(log.id, { status: "failed", errorMessage: "Step not found" });
          continue;
        }
        const [client] = await db.select().from(clients).where((0, import_drizzle_orm4.eq)(clients.id, log.clientId));
        if (!client || !client.phone) {
          await updateFollowupLog(log.id, {
            status: "failed",
            errorMessage: client ? "No phone number on file" : "Client not found"
          });
          continue;
        }
        const messageBody = await resolveTemplate(step.messageTemplate, log.clientId);
        if (step.channel === "sms") {
          const result = await sendSMS({ to: client.phone, body: messageBody });
          if (result.success) {
            await updateFollowupLog(log.id, {
              status: "sent",
              sentAt: /* @__PURE__ */ new Date(),
              messageSid: result.messageSid || null
            });
            console.log(`[Followup Scheduler] Sent SMS to ${client.firstName} ${client.lastName} (log #${log.id})`);
          } else {
            await updateFollowupLog(log.id, {
              status: "failed",
              errorMessage: result.error || "SMS send failed"
            });
            console.error(`[Followup Scheduler] Failed SMS for log #${log.id}: ${result.error}`);
          }
        } else {
          await updateFollowupLog(log.id, {
            status: "failed",
            errorMessage: "Email channel not yet implemented"
          });
        }
      } catch (err) {
        console.error(`[Followup Scheduler] Error processing log #${log.id}:`, err.message);
        await updateFollowupLog(log.id, {
          status: "failed",
          errorMessage: err.message
        });
      }
    }
  } catch (err) {
    console.error("[Followup Scheduler] Poll error:", err.message);
  }
}
function startFollowupScheduler() {
  if (intervalHandle) {
    console.log("[Followup Scheduler] Already running");
    return;
  }
  console.log("[Followup Scheduler] Started (polling every 60s)");
  processPendingFollowups();
  intervalHandle = setInterval(processPendingFollowups, POLL_INTERVAL_MS);
}

// server/_core/index.ts
init_daily_summary_scheduler();

// server/_core/systemRouter.ts
var import_zod = require("zod");
init_notification();

// server/_core/trpc.ts
var import_server2 = require("@trpc/server");
var import_superjson = __toESM(require("superjson"));
var t = import_server2.initTRPC.context().create({
  transformer: import_superjson.default
});
var router = t.router;
var publicProcedure = t.procedure;
var requireUser = t.middleware(async (opts) => {
  const { ctx, next } = opts;
  if (!ctx.user) {
    throw new import_server2.TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user
    }
  });
});
var protectedProcedure = t.procedure.use(requireUser);
var adminProcedure = t.procedure.use(
  t.middleware(async (opts) => {
    const { ctx, next } = opts;
    if (!ctx.user || ctx.user.role !== "admin") {
      throw new import_server2.TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }
    return next({
      ctx: {
        ...ctx,
        user: ctx.user
      }
    });
  })
);
var requireStaffAdmin = t.middleware(async (opts) => {
  const { ctx, next } = opts;
  if (!ctx.user) {
    throw new import_server2.TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }
  const { getStaffMemberByUserId: getStaffMemberByUserId2 } = await Promise.resolve().then(() => (init_queries(), queries_exports));
  const staff = await getStaffMemberByUserId2(ctx.user.id);
  const isOwner = ctx.user.openId === (process.env.OWNER_OPEN_ID ?? "");
  if (isOwner) {
    return next({ ctx: { ...ctx, user: ctx.user, staffRecord: staff ?? null } });
  }
  if (!staff) {
    throw new import_server2.TRPCError({ code: "FORBIDDEN", message: NOT_STAFF_ADMIN_ERR_MSG });
  }
  const adminRoles = ["owner", "admin", "manager"];
  if (!adminRoles.includes(staff.role)) {
    throw new import_server2.TRPCError({ code: "FORBIDDEN", message: NOT_STAFF_ADMIN_ERR_MSG });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
      staffRecord: staff
    }
  });
});
var staffAdminProcedure = t.procedure.use(requireStaffAdmin);
var requireStaffSelf = t.middleware(async (opts) => {
  const { ctx, next } = opts;
  if (!ctx.user) {
    throw new import_server2.TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }
  const { getStaffMemberByUserId: getStaffMemberByUserId2 } = await Promise.resolve().then(() => (init_queries(), queries_exports));
  const staff = await getStaffMemberByUserId2(ctx.user.id);
  const isOwner = ctx.user.openId === (process.env.OWNER_OPEN_ID ?? "");
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
      staffRecord: staff ?? null,
      isOwnerOrAdmin: isOwner || (staff ? ["owner", "admin", "manager"].includes(staff.role) : false),
      selfStaffId: staff?.id ?? null
    }
  });
});
var staffSelfProcedure = t.procedure.use(requireStaffSelf);

// server/_core/systemRouter.ts
var systemRouter = router({
  health: publicProcedure.input(
    import_zod.z.object({
      timestamp: import_zod.z.number().min(0, "timestamp cannot be negative")
    })
  ).query(() => ({
    ok: true
  })),
  notifyOwner: adminProcedure.input(
    import_zod.z.object({
      title: import_zod.z.string().min(1, "title is required"),
      content: import_zod.z.string().min(1, "content is required")
    })
  ).mutation(async ({ input }) => {
    const delivered = await notifyOwner(input);
    return {
      success: delivered
    };
  })
});

// server/routers.ts
var import_server3 = require("@trpc/server");
var import_zod2 = require("zod");
init_queries();

// server/storage.ts
init_env();
function getStorageConfig() {
  const baseUrl = ENV.forgeApiUrl;
  const apiKey = ENV.forgeApiKey;
  if (!baseUrl || !apiKey) {
    throw new Error(
      "Storage proxy credentials missing: set BUILT_IN_FORGE_API_URL and BUILT_IN_FORGE_API_KEY"
    );
  }
  return { baseUrl: baseUrl.replace(/\/+$/, ""), apiKey };
}
function buildUploadUrl(baseUrl, relKey) {
  const url = new URL("v1/storage/upload", ensureTrailingSlash(baseUrl));
  url.searchParams.set("path", normalizeKey(relKey));
  return url;
}
function ensureTrailingSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}
function normalizeKey(relKey) {
  return relKey.replace(/^\/+/, "");
}
function toFormData(data, contentType, fileName) {
  const blob = typeof data === "string" ? new Blob([data], { type: contentType }) : new Blob([data], { type: contentType });
  const form = new FormData();
  form.append("file", blob, fileName || "file");
  return form;
}
function buildAuthHeaders(apiKey) {
  return { Authorization: `Bearer ${apiKey}` };
}
async function storagePut(relKey, data, contentType = "application/octet-stream") {
  const { baseUrl, apiKey } = getStorageConfig();
  const key = normalizeKey(relKey);
  const uploadUrl = buildUploadUrl(baseUrl, key);
  const formData = toFormData(data, contentType, key.split("/").pop() ?? key);
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: buildAuthHeaders(apiKey),
    body: formData
  });
  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText);
    throw new Error(
      `Storage upload failed (${response.status} ${response.statusText}): ${message}`
    );
  }
  const url = (await response.json()).url;
  return { key, url };
}

// server/square.ts
var SQUARE_BASE_URL = "https://connect.squareup.com/v2";
function getHeaders() {
  return {
    "Authorization": `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Square-Version": "2024-01-18"
  };
}
function getLocationId() {
  return "L9BBDQGZRBB2J";
}
async function createPaymentLink(params) {
  const idempotencyKey = `savage-k9-inv-${params.invoiceId}-${Date.now()}`;
  const amountInCents = Math.round(params.amount * 100);
  const body = {
    idempotency_key: idempotencyKey,
    quick_pay: {
      name: params.description || `Invoice #${params.invoiceId}`,
      price_money: {
        amount: amountInCents,
        currency: "USD"
      },
      location_id: getLocationId()
    },
    checkout_options: {
      redirect_url: params.redirectUrl,
      ask_for_shipping_address: false
    },
    pre_populated_data: {
      buyer_email: void 0
    }
  };
  const response = await fetch(`${SQUARE_BASE_URL}/online-checkout/payment-links`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Square API error: ${response.status} - ${error}`);
  }
  const data = await response.json();
  return {
    paymentLinkUrl: data.payment_link.url,
    paymentLinkId: data.payment_link.id,
    orderId: data.payment_link.order_id
  };
}
async function getOrder(orderId) {
  const response = await fetch(`${SQUARE_BASE_URL}/orders/${orderId}`, {
    headers: getHeaders()
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Square API error: ${response.status} - ${error}`);
  }
  const data = await response.json();
  const order = data.order;
  return {
    id: order.id,
    state: order.state,
    totalMoney: {
      amount: order.total_money?.amount ?? 0,
      currency: order.total_money?.currency ?? "USD"
    },
    tenders: (order.tenders ?? []).map((t2) => ({
      id: t2.id,
      type: t2.type,
      amountMoney: {
        amount: t2.amount_money?.amount ?? 0,
        currency: t2.amount_money?.currency ?? "USD"
      },
      createdAt: t2.created_at
    }))
  };
}
async function listPayments(params) {
  const queryParams = new URLSearchParams({
    location_id: getLocationId(),
    ...params?.limit && { limit: params.limit.toString() },
    ...params?.beginTime && { begin_time: params.beginTime },
    ...params?.endTime && { end_time: params.endTime }
  });
  const response = await fetch(`${SQUARE_BASE_URL}/payments?${queryParams}`, {
    headers: getHeaders()
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Square API error: ${response.status} - ${error}`);
  }
  const data = await response.json();
  return (data.payments ?? []).map((p) => ({
    id: p.id,
    status: p.status,
    amountMoney: {
      amount: p.amount_money?.amount ?? 0,
      currency: p.amount_money?.currency ?? "USD"
    },
    orderId: p.order_id,
    createdAt: p.created_at,
    receiptUrl: p.receipt_url ?? null
  }));
}

// server/square-import.ts
var SQUARE_BASE_URL2 = "https://connect.squareup.com/v2";
function getHeaders2() {
  return {
    Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Square-Version": "2024-01-18"
  };
}
function getLocationId2() {
  return "L9BBDQGZRBB2J";
}
async function fetchAllSquareCustomers() {
  const customers = [];
  let cursor;
  do {
    const params = new URLSearchParams({ limit: "100" });
    if (cursor) params.set("cursor", cursor);
    const response = await fetch(`${SQUARE_BASE_URL2}/customers?${params}`, {
      headers: getHeaders2()
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Square API error (customers): ${response.status} - ${error}`);
    }
    const data = await response.json();
    if (data.customers) {
      customers.push(...data.customers);
    }
    cursor = data.cursor;
  } while (cursor);
  return customers;
}
async function fetchAllSquareInvoices() {
  const invoices2 = [];
  let cursor;
  do {
    const params = new URLSearchParams({
      location_id: getLocationId2(),
      limit: "100"
    });
    if (cursor) params.set("cursor", cursor);
    const response = await fetch(`${SQUARE_BASE_URL2}/invoices?${params}`, {
      headers: getHeaders2()
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Square API error (invoices): ${response.status} - ${error}`);
    }
    const data = await response.json();
    if (data.invoices) {
      invoices2.push(...data.invoices);
    }
    cursor = data.cursor;
  } while (cursor);
  return invoices2;
}
function mapSquareInvoiceStatus(squareStatus) {
  switch (squareStatus) {
    case "DRAFT":
      return "draft";
    case "UNPAID":
    case "SCHEDULED":
      return "sent";
    case "PARTIALLY_PAID":
      return "sent";
    case "PAID":
    case "PARTIALLY_REFUNDED":
    case "REFUNDED":
      return "paid";
    case "CANCELED":
      return "cancelled";
    default:
      return "draft";
  }
}
async function fetchOrdersForCustomer(customerId) {
  const orders = [];
  let cursor;
  do {
    const body = {
      location_ids: [getLocationId2()],
      query: {
        filter: {
          customer_filter: {
            customer_ids: [customerId]
          }
        },
        sort: {
          sort_field: "CREATED_AT",
          sort_order: "DESC"
        }
      },
      limit: 50
    };
    if (cursor) body.cursor = cursor;
    const response = await fetch(`${SQUARE_BASE_URL2}/orders/search`, {
      method: "POST",
      headers: getHeaders2(),
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      return orders;
    }
    const data = await response.json();
    if (data.orders) {
      orders.push(...data.orders);
    }
    cursor = data.cursor;
  } while (cursor);
  return orders;
}
function mapOrderToTransaction(order, clientId) {
  const amountCents = order.total_money?.amount ?? 0;
  const tender = order.tenders?.[0];
  let type = "pos";
  if (tender?.type === "CARD") type = "payment_link";
  else if (tender?.type === "CASH") type = "manual";
  const lineItems = order.line_items?.map((li) => li.name).filter(Boolean).join(", ");
  return {
    clientId,
    squareOrderId: order.id,
    squarePaymentId: tender?.id ?? null,
    amount: String(amountCents / 100),
    type,
    status: order.state === "COMPLETED" ? "completed" : "pending",
    description: lineItems || `Square Order ${order.id.slice(0, 8)}`,
    paymentMethod: tender?.type ?? "unknown",
    paidAt: order.state === "COMPLETED" ? new Date(order.created_at) : void 0
  };
}

// server/_core/llm.ts
init_env();
var ensureArray = (value) => Array.isArray(value) ? value : [value];
var normalizeContentPart = (part) => {
  if (typeof part === "string") {
    return { type: "text", text: part };
  }
  if (part.type === "text") {
    return part;
  }
  if (part.type === "image_url") {
    return part;
  }
  if (part.type === "file_url") {
    return part;
  }
  throw new Error("Unsupported message content part");
};
var normalizeMessage = (message) => {
  const { role, name, tool_call_id } = message;
  if (role === "tool" || role === "function") {
    const content = ensureArray(message.content).map((part) => typeof part === "string" ? part : JSON.stringify(part)).join("\n");
    return {
      role,
      name,
      tool_call_id,
      content
    };
  }
  const contentParts = ensureArray(message.content).map(normalizeContentPart);
  if (contentParts.length === 1 && contentParts[0].type === "text") {
    return {
      role,
      name,
      content: contentParts[0].text
    };
  }
  return {
    role,
    name,
    content: contentParts
  };
};
var normalizeToolChoice = (toolChoice, tools) => {
  if (!toolChoice) return void 0;
  if (toolChoice === "none" || toolChoice === "auto") {
    return toolChoice;
  }
  if (toolChoice === "required") {
    if (!tools || tools.length === 0) {
      throw new Error("tool_choice 'required' was provided but no tools were configured");
    }
    if (tools.length > 1) {
      throw new Error(
        "tool_choice 'required' needs a single tool or specify the tool name explicitly"
      );
    }
    return {
      type: "function",
      function: { name: tools[0].function.name }
    };
  }
  if ("name" in toolChoice) {
    return {
      type: "function",
      function: { name: toolChoice.name }
    };
  }
  return toolChoice;
};
var resolveApiUrl = () => ENV.forgeApiUrl && ENV.forgeApiUrl.trim().length > 0 ? `${ENV.forgeApiUrl.replace(/\/$/, "")}/v1/chat/completions` : "https://forge.manus.im/v1/chat/completions";
var assertApiKey = () => {
  if (!ENV.forgeApiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }
};
var normalizeResponseFormat = ({
  responseFormat,
  response_format,
  outputSchema,
  output_schema
}) => {
  const explicitFormat = responseFormat || response_format;
  if (explicitFormat) {
    if (explicitFormat.type === "json_schema" && !explicitFormat.json_schema?.schema) {
      throw new Error("responseFormat json_schema requires a defined schema object");
    }
    return explicitFormat;
  }
  const schema = outputSchema || output_schema;
  if (!schema) return void 0;
  if (!schema.name || !schema.schema) {
    throw new Error("outputSchema requires both name and schema");
  }
  return {
    type: "json_schema",
    json_schema: {
      name: schema.name,
      schema: schema.schema,
      ...typeof schema.strict === "boolean" ? { strict: schema.strict } : {}
    }
  };
};
async function invokeLLM(params) {
  assertApiKey();
  const {
    messages: messages2,
    tools,
    toolChoice,
    tool_choice,
    outputSchema,
    output_schema,
    responseFormat,
    response_format
  } = params;
  const payload = {
    model: "gemini-2.5-flash",
    messages: messages2.map(normalizeMessage)
  };
  if (tools && tools.length > 0) {
    payload.tools = tools;
  }
  const normalizedToolChoice = normalizeToolChoice(toolChoice || tool_choice, tools);
  if (normalizedToolChoice) {
    payload.tool_choice = normalizedToolChoice;
  }
  payload.max_tokens = 32768;
  payload.thinking = {
    budget_tokens: 128
  };
  const normalizedResponseFormat = normalizeResponseFormat({
    responseFormat,
    response_format,
    outputSchema,
    output_schema
  });
  if (normalizedResponseFormat) {
    payload.response_format = normalizedResponseFormat;
  }
  const response = await fetch(resolveApiUrl(), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${ENV.forgeApiKey}`
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LLM invoke failed: ${response.status} ${response.statusText} \u2013 ${errorText}`);
  }
  return await response.json();
}

// server/google-calendar.ts
var import_googleapis = require("googleapis");
init_db();
init_schema();
var import_drizzle_orm5 = require("drizzle-orm");
function getOAuth2Client(redirectUri) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Google Calendar credentials not configured");
  }
  return new import_googleapis.google.auth.OAuth2(clientId, clientSecret, redirectUri);
}
function getAuthUrl(redirectUri, state) {
  const oauth2Client = getOAuth2Client(redirectUri);
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar"],
    prompt: "consent",
    state
  });
}
async function exchangeCode(code, redirectUri) {
  const oauth2Client = getOAuth2Client(redirectUri);
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
}
async function saveTokens(userId, tokens) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const existing = await db.select().from(googleCalendarTokens).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
  const data = {
    userId,
    accessToken: tokens.access_token || "",
    refreshToken: tokens.refresh_token || null,
    expiresAt: tokens.expiry_date ? new Date(tokens.expiry_date) : null,
    syncEnabled: true
  };
  if (existing.length > 0) {
    await db.update(googleCalendarTokens).set({
      accessToken: data.accessToken,
      ...data.refreshToken ? { refreshToken: data.refreshToken } : {},
      expiresAt: data.expiresAt,
      syncEnabled: true
    }).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
    return existing[0].id;
  } else {
    const result = await db.insert(googleCalendarTokens).values(data);
    return result[0].insertId;
  }
}
async function getTokens(userId) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(googleCalendarTokens).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
  return rows[0] || null;
}
async function getAnyActiveTokens() {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(googleCalendarTokens).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.syncEnabled, true));
  return rows[0] || null;
}
async function removeTokens(userId) {
  const db = await getDb();
  if (!db) return;
  await db.delete(googleCalendarTokens).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
}
async function getCalendarClient(userId) {
  const tokenData = await getTokens(userId);
  if (!tokenData) return null;
  const oauth2Client = getOAuth2Client();
  oauth2Client.setCredentials({
    access_token: tokenData.accessToken,
    refresh_token: tokenData.refreshToken,
    expiry_date: tokenData.expiresAt ? tokenData.expiresAt.getTime() : void 0
  });
  oauth2Client.on("tokens", async (tokens) => {
    try {
      await saveTokens(userId, tokens);
    } catch (e) {
      console.error("[GCal] Failed to save refreshed tokens:", e);
    }
  });
  return import_googleapis.google.calendar({ version: "v3", auth: oauth2Client });
}
async function getAnyCalendarClient() {
  const tokenData = await getAnyActiveTokens();
  if (!tokenData) return null;
  const oauth2Client = getOAuth2Client();
  oauth2Client.setCredentials({
    access_token: tokenData.accessToken,
    refresh_token: tokenData.refreshToken,
    expiry_date: tokenData.expiresAt ? tokenData.expiresAt.getTime() : void 0
  });
  oauth2Client.on("tokens", async (tokens) => {
    try {
      await saveTokens(tokenData.userId, tokens);
    } catch (e) {
      console.error("[GCal] Failed to save refreshed tokens:", e);
    }
  });
  return {
    calendar: import_googleapis.google.calendar({ version: "v3", auth: oauth2Client }),
    userId: tokenData.userId,
    calendarId: tokenData.calendarId || "primary"
  };
}
function buildEventBody(appt, clientName, dogName) {
  const parts = [];
  if (appt.type) parts.push(`Type: ${appt.type}`);
  if (clientName) parts.push(`Client: ${clientName}`);
  if (dogName) parts.push(`Dog: ${dogName}`);
  if (appt.notes) parts.push(`
Notes: ${appt.notes}`);
  const title = appt.title || [
    appt.type ? appt.type.charAt(0).toUpperCase() + appt.type.slice(1) : "Appointment",
    dogName ? `- ${dogName}` : "",
    clientName ? `(${clientName})` : ""
  ].filter(Boolean).join(" ");
  const startTime = new Date(appt.startTime);
  const endTime = appt.endTime ? new Date(appt.endTime) : new Date(startTime.getTime() + 60 * 60 * 1e3);
  return {
    summary: title,
    description: parts.join("\n") || void 0,
    start: { dateTime: startTime.toISOString() },
    end: { dateTime: endTime.toISOString() },
    colorId: getColorForType(appt.type)
  };
}
function getColorForType(type) {
  switch (type) {
    case "training":
      return "9";
    // Blueberry
    case "eval":
      return "5";
    // Banana
    case "boarding":
      return "10";
    // Basil
    case "breeding":
      return "6";
    // Tangerine
    case "grooming":
      return "3";
    // Grape
    default:
      return "7";
  }
}
async function syncAppointmentToGoogle(appointmentId) {
  try {
    const clientData = await getAnyCalendarClient();
    if (!clientData) return null;
    const { calendar, calendarId } = clientData;
    const db = await getDb();
    if (!db) return null;
    const [appt] = await db.select().from(appointments).where((0, import_drizzle_orm5.eq)(appointments.id, appointmentId));
    if (!appt) return null;
    let clientName;
    let dogName;
    if (appt.clientId) {
      const [client] = await db.select({ firstName: clients.firstName, lastName: clients.lastName }).from(clients).where((0, import_drizzle_orm5.eq)(clients.id, appt.clientId));
      if (client) clientName = `${client.firstName} ${client.lastName}`;
    }
    if (appt.dogId) {
      const [dog] = await db.select({ name: dogs.name }).from(dogs).where((0, import_drizzle_orm5.eq)(dogs.id, appt.dogId));
      if (dog) dogName = dog.name;
    }
    const eventBody = buildEventBody(appt, clientName, dogName);
    if (appt.googleCalendarEventId) {
      try {
        const res = await calendar.events.update({
          calendarId,
          eventId: appt.googleCalendarEventId,
          requestBody: eventBody
        });
        return res.data.id || appt.googleCalendarEventId;
      } catch (e) {
        if (e?.code === 404) {
          const res = await calendar.events.insert({ calendarId, requestBody: eventBody });
          const newId = res.data.id || null;
          if (newId) {
            await db.update(appointments).set({ googleCalendarEventId: newId }).where((0, import_drizzle_orm5.eq)(appointments.id, appointmentId));
          }
          return newId;
        }
        throw e;
      }
    } else {
      const res = await calendar.events.insert({ calendarId, requestBody: eventBody });
      const eventId = res.data.id || null;
      if (eventId) {
        await db.update(appointments).set({ googleCalendarEventId: eventId }).where((0, import_drizzle_orm5.eq)(appointments.id, appointmentId));
      }
      return eventId;
    }
  } catch (e) {
    console.error("[GCal] Failed to sync appointment:", e);
    return null;
  }
}
async function deleteAppointmentFromGoogle(appointmentId) {
  try {
    const clientData = await getAnyCalendarClient();
    if (!clientData) return false;
    const { calendar, calendarId } = clientData;
    const db = await getDb();
    if (!db) return false;
    const [appt] = await db.select({ googleCalendarEventId: appointments.googleCalendarEventId }).from(appointments).where((0, import_drizzle_orm5.eq)(appointments.id, appointmentId));
    if (!appt?.googleCalendarEventId) return false;
    await calendar.events.delete({ calendarId, eventId: appt.googleCalendarEventId });
    await db.update(appointments).set({ googleCalendarEventId: null }).where((0, import_drizzle_orm5.eq)(appointments.id, appointmentId));
    return true;
  } catch (e) {
    console.error("[GCal] Failed to delete event:", e);
    return false;
  }
}
async function syncAllAppointmentsToGoogle() {
  try {
    const clientData = await getAnyCalendarClient();
    if (!clientData) return { synced: 0, failed: 0 };
    const db = await getDb();
    if (!db) return { synced: 0, failed: 0 };
    const now = /* @__PURE__ */ new Date();
    const allAppts = await db.select().from(appointments).where((0, import_drizzle_orm5.and)(
      (0, import_drizzle_orm5.eq)(appointments.status, "scheduled")
    ));
    let synced = 0;
    let failed = 0;
    for (const appt of allAppts) {
      try {
        const result = await syncAppointmentToGoogle(appt.id);
        if (result) synced++;
        else failed++;
      } catch {
        failed++;
      }
    }
    return { synced, failed };
  } catch (e) {
    console.error("[GCal] Failed to sync all:", e);
    return { synced: 0, failed: 0 };
  }
}
async function listGoogleCalendars(userId) {
  const cal = await getCalendarClient(userId);
  if (!cal) return [];
  try {
    const res = await cal.calendarList.list();
    return (res.data.items || []).map((c) => ({
      id: c.id || "",
      summary: c.summary || "",
      primary: c.primary || false
    }));
  } catch (e) {
    console.error("[GCal] Failed to list calendars:", e);
    return [];
  }
}
async function getAnyConnectionStatus() {
  const tokenData = await getAnyActiveTokens();
  if (!tokenData) return { connected: false, syncEnabled: false, calendarId: null, userId: null };
  return {
    connected: true,
    syncEnabled: tokenData.syncEnabled,
    calendarId: tokenData.calendarId,
    userId: tokenData.userId
  };
}
async function toggleSync(userId, enabled) {
  const db = await getDb();
  if (!db) return;
  await db.update(googleCalendarTokens).set({ syncEnabled: enabled }).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
}
async function setCalendarId(userId, calendarId) {
  const db = await getDb();
  if (!db) return;
  await db.update(googleCalendarTokens).set({ calendarId }).where((0, import_drizzle_orm5.eq)(googleCalendarTokens.userId, userId));
}
async function pullGoogleCalendarEvents(timeMin, timeMax) {
  try {
    const clientData = await getAnyCalendarClient();
    if (!clientData) return [];
    const { calendar, calendarId } = clientData;
    const db = await getDb();
    if (!db) return [];
    const res = await calendar.events.list({
      calendarId,
      timeMin: (/* @__PURE__ */ new Date(timeMin + "T00:00:00")).toISOString(),
      timeMax: (/* @__PURE__ */ new Date(timeMax + "T23:59:59")).toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      maxResults: 250
    });
    const items = res.data.items || [];
    const appEventIds = /* @__PURE__ */ new Set();
    const appAppts = await db.select({ gcalId: appointments.googleCalendarEventId }).from(appointments).where((0, import_drizzle_orm5.isNotNull)(appointments.googleCalendarEventId));
    for (const a of appAppts) {
      if (a.gcalId) appEventIds.add(a.gcalId);
    }
    return items.map((item) => {
      const isAllDay = !!(item.start?.date && !item.start?.dateTime);
      const startTime = item.start?.dateTime || item.start?.date || "";
      const endTime = item.end?.dateTime || item.end?.date || "";
      return {
        id: item.id || "",
        summary: item.summary || "(No title)",
        description: item.description || void 0,
        startTime,
        endTime,
        isAllDay,
        colorId: item.colorId || void 0,
        htmlLink: item.htmlLink || void 0,
        isAppEvent: appEventIds.has(item.id || "")
      };
    });
  } catch (e) {
    console.error("[GCal] Failed to pull events:", e);
    return [];
  }
}

// server/breeding-queries.ts
var import_drizzle_orm6 = require("drizzle-orm");
init_db();
init_schema();
var STAGES = [
  { name: "Whelping", startDay: 0, endDay: 0 },
  { name: "Neonatal Critical Care", startDay: 1, endDay: 3 },
  { name: "ENS / Early Handling", startDay: 4, endDay: 16 },
  { name: "Transition / Gruel Intro", startDay: 15, endDay: 21 },
  { name: "Socialization Foundation", startDay: 22, endDay: 28 },
  { name: "Confidence Building", startDay: 29, endDay: 35 },
  { name: "Drive + Nerve Development", startDay: 36, endDay: 42 },
  { name: "Advanced Exposure", startDay: 43, endDay: 49 },
  { name: "Evaluations + Matching", startDay: 49, endDay: 56 },
  { name: "Go-Home Prep", startDay: 56, endDay: 999 }
];
function getStageForDay(ageDays) {
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (ageDays >= STAGES[i].startDay) return STAGES[i].name;
  }
  return "Unknown";
}
function getAgeDays(birthDate) {
  if (!birthDate) return null;
  const birth = new Date(birthDate);
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - birth.getTime();
  return Math.floor(diff / (1e3 * 60 * 60 * 24));
}
async function listLittersWithDetails() {
  const db = await getDb();
  if (!db) return [];
  const rows = await db.select().from(litters).orderBy((0, import_drizzle_orm6.desc)(litters.createdAt));
  const enriched = [];
  for (const litter of rows) {
    let damName = null;
    let sireName = null;
    if (litter.damId) {
      const dam = await db.select({ name: dogs.name }).from(dogs).where((0, import_drizzle_orm6.eq)(dogs.id, litter.damId)).limit(1);
      damName = dam[0]?.name ?? null;
    }
    if (litter.sireId) {
      const sire = await db.select({ name: dogs.name }).from(dogs).where((0, import_drizzle_orm6.eq)(dogs.id, litter.sireId)).limit(1);
      sireName = sire[0]?.name ?? null;
    }
    const pups = await db.select({ id: puppies.id }).from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, litter.id));
    const ageDays = getAgeDays(litter.birthDate ?? litter.whelpDate);
    const currentStage = ageDays !== null ? getStageForDay(ageDays) : null;
    enriched.push({
      ...litter,
      damName,
      sireName,
      actualPuppyCount: pups.length,
      ageDays,
      currentStage
    });
  }
  return enriched;
}
async function getLitterDetail(id) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(litters).where((0, import_drizzle_orm6.eq)(litters.id, id)).limit(1);
  if (!rows[0]) return null;
  const litter = rows[0];
  let damName = null;
  let sireName = null;
  if (litter.damId) {
    const dam = await db.select({ name: dogs.name }).from(dogs).where((0, import_drizzle_orm6.eq)(dogs.id, litter.damId)).limit(1);
    damName = dam[0]?.name ?? null;
  }
  if (litter.sireId) {
    const sire = await db.select({ name: dogs.name }).from(dogs).where((0, import_drizzle_orm6.eq)(dogs.id, litter.sireId)).limit(1);
    sireName = sire[0]?.name ?? null;
  }
  const pups = await db.select().from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, id)).orderBy(puppies.puppyNumber);
  const ageDays = getAgeDays(litter.birthDate ?? litter.whelpDate);
  const currentStage = ageDays !== null ? getStageForDay(ageDays) : null;
  const flaggedPuppyIds = [];
  if (pups.length > 0) {
    const flags = await db.select({ puppyId: puppyFlags.puppyId }).from(puppyFlags).where((0, import_drizzle_orm6.and)(
      (0, import_drizzle_orm6.inArray)(puppyFlags.puppyId, pups.map((p) => p.id)),
      (0, import_drizzle_orm6.eq)(puppyFlags.status, "active")
    ));
    flaggedPuppyIds.push(...flags.map((f) => f.puppyId));
  }
  return {
    ...litter,
    damName,
    sireName,
    puppies: pups,
    ageDays,
    currentStage,
    flaggedPuppyIds: [...new Set(flaggedPuppyIds)]
  };
}
async function createLitterFull(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(litters).values(data);
  return { id: Number(result[0].insertId) };
}
async function updateLitterFull(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(litters).set(data).where((0, import_drizzle_orm6.eq)(litters.id, id));
  return { id };
}
async function getPuppyDetail(id) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(puppies).where((0, import_drizzle_orm6.eq)(puppies.id, id)).limit(1);
  if (!rows[0]) return null;
  const puppy = rows[0];
  const flags = await db.select().from(puppyFlags).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyFlags.puppyId, id), (0, import_drizzle_orm6.eq)(puppyFlags.status, "active")));
  const flagDefs = await db.select().from(breedingFlags);
  const activeFlags = flags.map((f) => {
    const def = flagDefs.find((d) => d.id === f.flagId);
    return { ...f, flagName: def?.name ?? "Unknown", severity: def?.severity ?? "watch", category: def?.category ?? "health" };
  });
  const latestLog = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, id)).orderBy((0, import_drizzle_orm6.desc)(puppyDailyLogs.logDate)).limit(1);
  return {
    ...puppy,
    activeFlags,
    latestLog: latestLog[0] ?? null
  };
}
async function listPuppiesWithFlags(litterId) {
  const db = await getDb();
  if (!db) return [];
  const pups = await db.select().from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, litterId)).orderBy(puppies.puppyNumber);
  if (pups.length === 0) return [];
  const allFlags = await db.select().from(puppyFlags).where((0, import_drizzle_orm6.and)(
    (0, import_drizzle_orm6.inArray)(puppyFlags.puppyId, pups.map((p) => p.id)),
    (0, import_drizzle_orm6.eq)(puppyFlags.status, "active")
  ));
  const flagDefs = await db.select().from(breedingFlags);
  const recentLogs = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.inArray)(puppyDailyLogs.puppyId, pups.map((p) => p.id))).orderBy((0, import_drizzle_orm6.desc)(puppyDailyLogs.logDate));
  const clientIds = pups.map((p) => p.assignedClientId).filter(Boolean);
  let clientMap = {};
  if (clientIds.length > 0) {
    try {
      const cls = await db.select().from(clients).where((0, import_drizzle_orm6.inArray)(clients.id, clientIds));
      for (const c of cls) clientMap[c.id] = `${c.firstName} ${c.lastName}`;
    } catch {
    }
  }
  return pups.map((p) => {
    const logs = recentLogs.filter((l) => l.puppyId === p.id);
    const todayLog = logs[0];
    const yesterdayLog = logs[1];
    const todayWeight = todayLog?.weightGrams ? Number(todayLog.weightGrams) : p.currentWeightGrams ? Number(p.currentWeightGrams) : null;
    const yesterdayWeight = yesterdayLog?.weightGrams ? Number(yesterdayLog.weightGrams) : p.birthWeightGrams ? Number(p.birthWeightGrams) : null;
    const weightChange = todayWeight !== null && yesterdayWeight !== null ? todayWeight - yesterdayWeight : null;
    return {
      ...p,
      weightChange,
      assignedClientName: p.assignedClientId ? clientMap[p.assignedClientId] ?? null : null,
      activeFlags: allFlags.filter((f) => f.puppyId === p.id).map((f) => {
        const def = flagDefs.find((d) => d.id === f.flagId);
        return { ...f, flagName: def?.name ?? "Unknown", severity: def?.severity ?? "watch" };
      })
    };
  });
}
async function createPuppyFull(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(puppies).values(data);
  if (data.litterId) {
    const count2 = await db.select({ id: puppies.id }).from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, data.litterId));
    await db.update(litters).set({ puppyCount: count2.length }).where((0, import_drizzle_orm6.eq)(litters.id, data.litterId));
  }
  return { id: Number(result[0].insertId) };
}
async function updatePuppyFull(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(puppies).set(data).where((0, import_drizzle_orm6.eq)(puppies.id, id));
  return { id };
}
async function listPuppyDailyLogs(puppyId, limit) {
  const db = await getDb();
  if (!db) return [];
  let q = db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, puppyId)).orderBy((0, import_drizzle_orm6.desc)(puppyDailyLogs.logDate));
  if (limit) q = q.limit(limit);
  return q;
}
async function listPuppyDailyLogsByLitter(litterId, logDate) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyDailyLogs.litterId, litterId), (0, import_drizzle_orm6.eq)(puppyDailyLogs.logDate, logDate))).orderBy(puppyDailyLogs.puppyId);
}
async function upsertPuppyDailyLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, data.puppyId), (0, import_drizzle_orm6.eq)(puppyDailyLogs.logDate, data.logDate))).limit(1);
  if (existing[0]) {
    await db.update(puppyDailyLogs).set(data).where((0, import_drizzle_orm6.eq)(puppyDailyLogs.id, existing[0].id));
    return { id: existing[0].id };
  }
  const result = await db.insert(puppyDailyLogs).values(data);
  return { id: Number(result[0].insertId) };
}
async function bulkUpsertWeights(entries) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const results = [];
  for (const entry of entries) {
    const existing = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, entry.puppyId), (0, import_drizzle_orm6.eq)(puppyDailyLogs.logDate, entry.logDate))).limit(1);
    if (existing[0]) {
      await db.update(puppyDailyLogs).set({ weightGrams: entry.weightGrams, loggedBy: entry.loggedBy }).where((0, import_drizzle_orm6.eq)(puppyDailyLogs.id, existing[0].id));
      results.push({ puppyId: entry.puppyId, id: existing[0].id });
    } else {
      const result = await db.insert(puppyDailyLogs).values({
        puppyId: entry.puppyId,
        litterId: entry.litterId,
        logDate: entry.logDate,
        weightGrams: entry.weightGrams,
        loggedBy: entry.loggedBy
      });
      results.push({ puppyId: entry.puppyId, id: Number(result[0].insertId) });
    }
    await db.update(puppies).set({ currentWeightGrams: entry.weightGrams }).where((0, import_drizzle_orm6.eq)(puppies.id, entry.puppyId));
  }
  return results;
}
async function getWeightHistory(puppyId) {
  const db = await getDb();
  if (!db) return [];
  return db.select({
    logDate: puppyDailyLogs.logDate,
    weightGrams: puppyDailyLogs.weightGrams
  }).from(puppyDailyLogs).where((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, puppyId)).orderBy(puppyDailyLogs.logDate);
}
async function upsertLitterDailyLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(litterDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(litterDailyLogs.litterId, data.litterId), (0, import_drizzle_orm6.eq)(litterDailyLogs.logDate, data.logDate))).limit(1);
  if (existing[0]) {
    await db.update(litterDailyLogs).set(data).where((0, import_drizzle_orm6.eq)(litterDailyLogs.id, existing[0].id));
    return { id: existing[0].id };
  }
  const result = await db.insert(litterDailyLogs).values(data);
  return { id: Number(result[0].insertId) };
}
async function getLitterDailyLog(litterId, logDate) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(litterDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(litterDailyLogs.litterId, litterId), (0, import_drizzle_orm6.eq)(litterDailyLogs.logDate, logDate))).limit(1);
  return rows[0] ?? null;
}
async function listLitterDailyLogs(litterId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(litterDailyLogs).where((0, import_drizzle_orm6.eq)(litterDailyLogs.litterId, litterId)).orderBy((0, import_drizzle_orm6.desc)(litterDailyLogs.logDate));
}
async function listTaskTemplates() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(taskTemplates).where((0, import_drizzle_orm6.eq)(taskTemplates.active, true)).orderBy(taskTemplates.startDay);
}
async function createTaskTemplate(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(taskTemplates).values(data);
  return { id: Number(result[0].insertId) };
}
async function generateDailyTasksForLitter(litterId, ageDays, taskDate) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const templates = await db.select().from(taskTemplates).where((0, import_drizzle_orm6.and)(
    (0, import_drizzle_orm6.eq)(taskTemplates.active, true),
    (0, import_drizzle_orm6.lte)(taskTemplates.startDay, ageDays),
    (0, import_drizzle_orm6.gte)(taskTemplates.endDay, ageDays)
  ));
  const existing = await db.select().from(breedingDailyTasks).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(breedingDailyTasks.litterId, litterId), (0, import_drizzle_orm6.eq)(breedingDailyTasks.taskDate, taskDate)));
  const existingTemplateIds = new Set(existing.map((t2) => t2.templateId));
  const newTasks = [];
  for (const tmpl of templates) {
    if (existingTemplateIds.has(tmpl.id)) continue;
    if (tmpl.appliesTo === "puppy") {
      const pups = await db.select({ id: puppies.id }).from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, litterId));
      for (const pup of pups) {
        newTasks.push({
          litterId,
          puppyId: pup.id,
          templateId: tmpl.id,
          taskDate,
          title: tmpl.taskTitle,
          description: tmpl.taskDescription,
          category: tmpl.category,
          priority: tmpl.priority,
          dueTime: tmpl.defaultDueTime
        });
      }
    } else {
      newTasks.push({
        litterId,
        templateId: tmpl.id,
        taskDate,
        title: tmpl.taskTitle,
        description: tmpl.taskDescription,
        category: tmpl.category,
        priority: tmpl.priority,
        dueTime: tmpl.defaultDueTime
      });
    }
  }
  if (newTasks.length > 0) {
    await db.insert(breedingDailyTasks).values(newTasks);
  }
  return { generated: newTasks.length };
}
async function generateTasksForNewPuppy(puppyId, litterId) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const litterRows = await db.select().from(litters).where((0, import_drizzle_orm6.eq)(litters.id, litterId)).limit(1);
  const litter = litterRows[0];
  if (!litter) return { generated: 0 };
  const birthDate = litter.birthDate ?? litter.whelpDate;
  const ageDays = getAgeDays(birthDate);
  if (ageDays === null) return { generated: 0 };
  const today = /* @__PURE__ */ new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const templates = await db.select().from(taskTemplates).where((0, import_drizzle_orm6.and)(
    (0, import_drizzle_orm6.eq)(taskTemplates.active, true),
    (0, import_drizzle_orm6.eq)(taskTemplates.appliesTo, "puppy"),
    (0, import_drizzle_orm6.lte)(taskTemplates.startDay, ageDays),
    (0, import_drizzle_orm6.gte)(taskTemplates.endDay, ageDays)
  ));
  if (templates.length === 0) return { generated: 0 };
  const existing = await db.select().from(breedingDailyTasks).where((0, import_drizzle_orm6.and)(
    (0, import_drizzle_orm6.eq)(breedingDailyTasks.litterId, litterId),
    (0, import_drizzle_orm6.eq)(breedingDailyTasks.puppyId, puppyId),
    (0, import_drizzle_orm6.eq)(breedingDailyTasks.taskDate, todayStr)
  ));
  const existingTemplateIds = new Set(existing.map((t2) => t2.templateId));
  const newTasks = [];
  for (const tmpl of templates) {
    if (existingTemplateIds.has(tmpl.id)) continue;
    newTasks.push({
      litterId,
      puppyId,
      templateId: tmpl.id,
      taskDate: todayStr,
      title: tmpl.taskTitle,
      description: tmpl.taskDescription,
      category: tmpl.category,
      priority: tmpl.priority,
      dueTime: tmpl.defaultDueTime
    });
  }
  if (newTasks.length > 0) {
    await db.insert(breedingDailyTasks).values(newTasks);
  }
  return { generated: newTasks.length };
}
async function listBreedingDailyTasks(litterId, taskDate) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [(0, import_drizzle_orm6.eq)(breedingDailyTasks.litterId, litterId)];
  if (taskDate) conditions.push((0, import_drizzle_orm6.eq)(breedingDailyTasks.taskDate, taskDate));
  return db.select().from(breedingDailyTasks).where((0, import_drizzle_orm6.and)(...conditions)).orderBy(breedingDailyTasks.dueTime, breedingDailyTasks.priority);
}
async function completeBreedingTask(id, completedBy) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(breedingDailyTasks).set({
    completed: true,
    completedBy,
    completedAt: /* @__PURE__ */ new Date()
  }).where((0, import_drizzle_orm6.eq)(breedingDailyTasks.id, id));
  return { id };
}
async function bulkCompleteBreedingTasks(ids, completedBy) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  if (ids.length === 0) return { count: 0 };
  await db.update(breedingDailyTasks).set({
    completed: true,
    completedBy,
    completedAt: /* @__PURE__ */ new Date()
  }).where((0, import_drizzle_orm6.inArray)(breedingDailyTasks.id, ids));
  return { count: ids.length };
}
async function listBreedingFlags() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(breedingFlags).where((0, import_drizzle_orm6.eq)(breedingFlags.active, true));
}
async function ensureDefaultFlags() {
  const db = await getDb();
  if (!db) return;
  const existing = await db.select().from(breedingFlags);
  if (existing.length > 0) return;
  const defaults = [
    { name: "Weight Loss", category: "health", severity: "warning", description: "Puppy lost weight compared to previous day" },
    { name: "Not Nursing", category: "health", severity: "critical", description: "Puppy is not nursing" },
    { name: "Cold Pup", category: "health", severity: "critical", description: "Puppy temperature is cold" },
    { name: "Medical Watch", category: "health", severity: "warning", description: "Puppy is lethargic and needs monitoring" },
    { name: "Low Recovery / Nervous", category: "behavior", severity: "watch", description: "Recovery time over 30 seconds during curriculum" },
    { name: "Weak Pup", category: "health", severity: "warning", description: "Puppy showing signs of weakness" },
    { name: "High Drive", category: "behavior", severity: "info", description: "Puppy showing high drive levels" },
    { name: "Bite Risk", category: "handling", severity: "critical", description: "Puppy has shown bite tendencies" },
    { name: "Handle With Caution", category: "handling", severity: "warning", description: "Requires careful handling" },
    { name: "Not Dog Friendly", category: "behavior", severity: "warning", description: "Shows aggression toward other dogs" },
    { name: "In Heat", category: "health", severity: "info", description: "Dam is in heat" },
    { name: "Go-Home Incomplete", category: "admin", severity: "warning", description: "Go-home checklist not complete within 7 days of go-home date" },
    { name: "Breathing Concern", category: "health", severity: "critical", description: "Puppy showing signs of breathing difficulty" },
    { name: "Loose Stool", category: "health", severity: "watch", description: "Puppy has loose stool or diarrhea" }
  ];
  await db.insert(breedingFlags).values(defaults);
}
async function createBreedingFlag(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(breedingFlags).values(data);
  return { id: Number(result[0].insertId) };
}
async function addPuppyFlag(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(puppyFlags).values(data);
  return { id: Number(result[0].insertId) };
}
async function resolvePuppyFlag(id, resolvedBy) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(puppyFlags).set({
    status: "resolved",
    resolvedBy,
    resolvedAt: /* @__PURE__ */ new Date()
  }).where((0, import_drizzle_orm6.eq)(puppyFlags.id, id));
  return { id };
}
async function listPuppyActiveFlags(puppyId) {
  const db = await getDb();
  if (!db) return [];
  const flags = await db.select().from(puppyFlags).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyFlags.puppyId, puppyId), (0, import_drizzle_orm6.eq)(puppyFlags.status, "active")));
  const flagDefs = await db.select().from(breedingFlags);
  return flags.map((f) => {
    const def = flagDefs.find((d) => d.id === f.flagId);
    return { ...f, flagName: def?.name ?? "Unknown", severity: def?.severity ?? "watch", category: def?.category ?? "health" };
  });
}
async function runAutoFlagRules(puppyId, litterId, logDate) {
  const db = await getDb();
  if (!db) return [];
  const flagDefs = await db.select().from(breedingFlags);
  const flagByName = (name) => flagDefs.find((f) => f.name === name);
  const activeFlags = await db.select().from(puppyFlags).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyFlags.puppyId, puppyId), (0, import_drizzle_orm6.eq)(puppyFlags.status, "active")));
  const activeFlagIds = new Set(activeFlags.map((f) => f.flagId));
  const newFlags = [];
  const todayLog = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, puppyId), (0, import_drizzle_orm6.eq)(puppyDailyLogs.logDate, logDate))).limit(1);
  const log = todayLog[0];
  if (!log) return [];
  if (log.weightGrams) {
    const prevLogs = await db.select().from(puppyDailyLogs).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyDailyLogs.puppyId, puppyId), (0, import_drizzle_orm6.lte)(puppyDailyLogs.logDate, logDate))).orderBy((0, import_drizzle_orm6.desc)(puppyDailyLogs.logDate)).limit(2);
    if (prevLogs.length >= 2 && prevLogs[1].weightGrams) {
      if (Number(log.weightGrams) < Number(prevLogs[1].weightGrams)) {
        const flag = flagByName("Weight Loss");
        if (flag && !activeFlagIds.has(flag.id)) {
          await addPuppyFlag({ puppyId, flagId: flag.id, notes: `Weight dropped from ${prevLogs[1].weightGrams}g to ${log.weightGrams}g on ${logDate}` });
          newFlags.push("Weight Loss");
        }
      }
    }
  }
  if (log.nursingQuality === "not_nursing") {
    const flag = flagByName("Not Nursing");
    if (flag && !activeFlagIds.has(flag.id)) {
      await addPuppyFlag({ puppyId, flagId: flag.id, notes: `Not nursing on ${logDate}` });
      newFlags.push("Not Nursing");
    }
  }
  if (log.temperatureStatus === "cold") {
    const flag = flagByName("Cold Pup");
    if (flag && !activeFlagIds.has(flag.id)) {
      await addPuppyFlag({ puppyId, flagId: flag.id, notes: `Cold temperature on ${logDate}` });
      newFlags.push("Cold Pup");
    }
  }
  if (log.energyLevel === "lethargic") {
    const flag = flagByName("Medical Watch");
    if (flag && !activeFlagIds.has(flag.id)) {
      await addPuppyFlag({ puppyId, flagId: flag.id, notes: `Lethargic on ${logDate}` });
      newFlags.push("Medical Watch");
    }
  }
  if (log.stool === "loose" || log.stool === "diarrhea") {
    const flag = flagByName("Loose Stool");
    if (flag && !activeFlagIds.has(flag.id)) {
      await addPuppyFlag({ puppyId, flagId: flag.id, notes: `${log.stool === "diarrhea" ? "Diarrhea" : "Loose stool"} on ${logDate}` });
      newFlags.push("Loose Stool");
    }
  }
  return newFlags;
}
async function listCurriculumLogs(opts) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (opts.puppyId) conditions.push((0, import_drizzle_orm6.eq)(curriculumLogs.puppyId, opts.puppyId));
  if (opts.litterId) conditions.push((0, import_drizzle_orm6.eq)(curriculumLogs.litterId, opts.litterId));
  if (opts.logDate) conditions.push((0, import_drizzle_orm6.eq)(curriculumLogs.logDate, opts.logDate));
  return db.select().from(curriculumLogs).where(conditions.length > 0 ? (0, import_drizzle_orm6.and)(...conditions) : void 0).orderBy((0, import_drizzle_orm6.desc)(curriculumLogs.logDate));
}
async function createCurriculumLog(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(curriculumLogs).values(data);
  if (data.recoveryTime === "over_30_seconds" && data.puppyId) {
    const flagDefs = await db.select().from(breedingFlags);
    const flag = flagDefs.find((f) => f.name === "Low Recovery / Nervous");
    if (flag) {
      const existing = await db.select().from(puppyFlags).where((0, import_drizzle_orm6.and)((0, import_drizzle_orm6.eq)(puppyFlags.puppyId, data.puppyId), (0, import_drizzle_orm6.eq)(puppyFlags.flagId, flag.id), (0, import_drizzle_orm6.eq)(puppyFlags.status, "active"))).limit(1);
      if (!existing[0]) {
        await addPuppyFlag({ puppyId: data.puppyId, flagId: flag.id, notes: `Recovery time > 30s during ${data.activity}` });
      }
    }
  }
  return { id: Number(result[0].insertId) };
}
async function listHealthEvents(opts) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (opts.puppyId) conditions.push((0, import_drizzle_orm6.eq)(breedingHealthEvents.puppyId, opts.puppyId));
  if (opts.litterId) conditions.push((0, import_drizzle_orm6.eq)(breedingHealthEvents.litterId, opts.litterId));
  if (opts.dogId) conditions.push((0, import_drizzle_orm6.eq)(breedingHealthEvents.dogId, opts.dogId));
  return db.select().from(breedingHealthEvents).where(conditions.length > 0 ? (0, import_drizzle_orm6.and)(...conditions) : void 0).orderBy((0, import_drizzle_orm6.desc)(breedingHealthEvents.eventDate));
}
async function createHealthEvent(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(breedingHealthEvents).values(data);
  return { id: Number(result[0].insertId) };
}
async function listEvaluations(puppyId) {
  const db = await getDb();
  if (!db) return [];
  const evals = await db.select().from(evaluations).where((0, import_drizzle_orm6.eq)(evaluations.puppyId, puppyId)).orderBy((0, import_drizzle_orm6.desc)(evaluations.evaluationDate));
  const enriched = [];
  for (const ev of evals) {
    const scores = await db.select().from(evaluationScores).where((0, import_drizzle_orm6.eq)(evaluationScores.evaluationId, ev.id));
    enriched.push({ ...ev, scores });
  }
  return enriched;
}
async function createEvaluation(data, scores) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(evaluations).values(data);
  const evalId = Number(result[0].insertId);
  if (scores && scores.length > 0) {
    await db.insert(evaluationScores).values(scores.map((s) => ({ ...s, evaluationId: evalId })));
  }
  return { id: evalId };
}
async function listPuppyMatches(puppyId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(puppyMatches).where((0, import_drizzle_orm6.eq)(puppyMatches.puppyId, puppyId)).orderBy((0, import_drizzle_orm6.desc)(puppyMatches.createdAt));
}
async function createPuppyMatch(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(puppyMatches).values(data);
  return { id: Number(result[0].insertId) };
}
async function updatePuppyMatch(id, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  await db.update(puppyMatches).set(data).where((0, import_drizzle_orm6.eq)(puppyMatches.id, id));
  return { id };
}
async function getGoHomeChecklist(puppyId) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(goHomeChecklists).where((0, import_drizzle_orm6.eq)(goHomeChecklists.puppyId, puppyId)).limit(1);
  return rows[0] ?? null;
}
async function upsertGoHomeChecklist(puppyId, data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select().from(goHomeChecklists).where((0, import_drizzle_orm6.eq)(goHomeChecklists.puppyId, puppyId)).limit(1);
  if (existing[0]) {
    await db.update(goHomeChecklists).set(data).where((0, import_drizzle_orm6.eq)(goHomeChecklists.id, existing[0].id));
    return { id: existing[0].id };
  }
  const result = await db.insert(goHomeChecklists).values({ puppyId, ...data });
  return { id: Number(result[0].insertId) };
}
async function listBreedingMedia(opts) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (opts.litterId) conditions.push((0, import_drizzle_orm6.eq)(breedingMediaFiles.litterId, opts.litterId));
  if (opts.puppyId) conditions.push((0, import_drizzle_orm6.eq)(breedingMediaFiles.puppyId, opts.puppyId));
  return db.select().from(breedingMediaFiles).where(conditions.length > 0 ? (0, import_drizzle_orm6.and)(...conditions) : void 0).orderBy((0, import_drizzle_orm6.desc)(breedingMediaFiles.createdAt));
}
async function createBreedingMedia(data) {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const result = await db.insert(breedingMediaFiles).values(data);
  return { id: Number(result[0].insertId) };
}
async function getBreedingAlerts() {
  const db = await getDb();
  if (!db) return [];
  const alerts = [];
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const activeFlags = await db.select({
    puppyId: puppyFlags.puppyId,
    flagId: puppyFlags.flagId
  }).from(puppyFlags).where((0, import_drizzle_orm6.eq)(puppyFlags.status, "active"));
  const flagDefs = await db.select().from(breedingFlags);
  for (const af of activeFlags) {
    const def = flagDefs.find((d) => d.id === af.flagId);
    if (def && (def.severity === "critical" || def.severity === "warning")) {
      const pup = await db.select({ name: puppies.temporaryName, collarColor: puppies.collarColor, litterId: puppies.litterId }).from(puppies).where((0, import_drizzle_orm6.eq)(puppies.id, af.puppyId)).limit(1);
      const pupName = pup[0]?.name ?? pup[0]?.collarColor ?? `Puppy #${af.puppyId}`;
      alerts.push({
        type: def.name,
        severity: def.severity ?? "watch",
        message: `${pupName}: ${def.name}`,
        puppyId: af.puppyId,
        litterId: pup[0]?.litterId ?? void 0
      });
    }
  }
  const activeLitters = await db.select().from(litters).where((0, import_drizzle_orm6.eq)(litters.pregnancyStatus, "whelped"));
  for (const litter of activeLitters) {
    const goHomeDate = litter.estimatedGoHomeDate;
    if (goHomeDate) {
      const goHome = new Date(goHomeDate);
      const now = /* @__PURE__ */ new Date();
      const daysUntil = Math.ceil((goHome.getTime() - now.getTime()) / (1e3 * 60 * 60 * 24));
      if (daysUntil <= 7 && daysUntil >= 0) {
        const pups = await db.select({ id: puppies.id }).from(puppies).where((0, import_drizzle_orm6.eq)(puppies.litterId, litter.id));
        for (const pup of pups) {
          const checklist = await db.select().from(goHomeChecklists).where((0, import_drizzle_orm6.eq)(goHomeChecklists.puppyId, pup.id)).limit(1);
          if (!checklist[0] || !checklist[0].finalVetExamComplete || !checklist[0].vaccinesComplete || !checklist[0].contractSigned || !checklist[0].invoicePaid) {
            alerts.push({
              type: "Go-Home Incomplete",
              severity: "warning",
              message: `Litter "${litter.litterName}" go-home in ${daysUntil} days \u2014 checklist incomplete`,
              litterId: litter.id,
              puppyId: pup.id
            });
            break;
          }
        }
      }
    }
  }
  return alerts;
}

// server/seed-breeding-templates.ts
init_db();
init_schema();
var import_drizzle_orm7 = require("drizzle-orm");
var TEMPLATES = [
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 1: WHELPING (Day 0)
  // ═══════════════════════════════════════════════════════════════════════════
  // Dam-level whelping tasks
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Monitor dam for labor signs", taskDescription: "Check for nesting behavior, temperature drop, panting, restlessness. Record temperature every 2 hours.", category: "whelping", appliesTo: "dam", priority: "urgent", defaultDueTime: "06:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Monitor active labor", taskDescription: "Watch dam closely during active labor. Note contractions, timing between puppies, and any signs of distress. Contact vet if more than 2 hours between puppies.", category: "whelping", appliesTo: "dam", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Count placentas \u2014 must match puppy count", taskDescription: "Retained placenta can cause infection. Contact vet immediately if count doesn't match.", category: "health", appliesTo: "dam", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Offer dam food and water post-whelp", taskDescription: "Small meal of high-quality food. Ensure fresh water is accessible. Monitor for excessive bleeding or lethargy.", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "04:00" },
  // Litter-level whelping tasks
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Prepare whelping box", taskDescription: "Clean and sanitize whelping box. Lay fresh bedding. Ensure heat lamp is positioned correctly (85-90\xB0F at puppy level).", category: "whelping", appliesTo: "litter", priority: "high", defaultDueTime: "06:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Assemble whelping kit", taskDescription: "Scissors, hemostats, iodine, bulb syringe, clean towels, scale, dental floss for cords, heating pad, puppy ID collars.", category: "whelping", appliesTo: "litter", priority: "high", defaultDueTime: "06:00" },
  // Per-puppy whelping checklist tasks
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Record time pushing begins", taskDescription: "Note the exact time active pushing/contractions begin for each puppy delivery. Track interval between births.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Assist delivery if needed", taskDescription: "If puppy is stuck or dam is struggling, gently assist. Pull only during contractions, downward and outward. Contact vet if breech or prolonged delivery.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Clear airway / break sac if needed", taskDescription: "If dam doesn't break the sac within 30 seconds, tear it open at the face. Use bulb syringe to clear fluid from nose and mouth. Ensure puppy is breathing.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Dry and stimulate puppy", taskDescription: "Vigorously rub puppy with clean towel to stimulate breathing and circulation. Rub against the grain of the fur. Puppy should cry and become pink.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Place puppy on heat source", taskDescription: "Place dried puppy on heating pad or under heat lamp. Maintain 85-90\xB0F at puppy level. Ensure puppy is warm and pink before returning to dam.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Record birth time", taskDescription: "Record exact time of birth for each puppy. Note birth order number. Track interval from previous puppy.", category: "whelping", appliesTo: "puppy", priority: "high", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Weigh puppy", taskDescription: "Record birth weight in grams immediately after drying. Use digital scale for accuracy.", category: "whelping", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Record gender", taskDescription: "Identify and record sex of each puppy (male/female). Double-check \u2014 newborn puppies can be difficult to sex accurately.", category: "whelping", appliesTo: "puppy", priority: "high", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Assign ID / collar color", taskDescription: "Place colored collar or ribbon on each puppy for identification. Record collar color assignment. Use rickrack or velvet ribbon \u2014 check fit is snug but not tight.", category: "whelping", appliesTo: "puppy", priority: "high", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Check cleft palate", taskDescription: "Gently open puppy's mouth and run finger along roof of mouth. Check for any opening or split in the palate. Flag immediately if detected \u2014 affects nursing ability.", category: "health", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Check umbilical cord", taskDescription: "Ensure cord is tied/clamped 1-2 inches from body. Apply iodine to stump. Check for bleeding or herniation. Monitor for infection in following days.", category: "health", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  { stageName: "Whelping", startDay: 0, endDay: 0, taskTitle: "Confirm first latch / nursing", taskDescription: "Guide puppy to teat and confirm strong latch and active nursing. First colostrum intake is critical within 2 hours of birth. Note suckle strength (strong/normal/weak).", category: "feeding", appliesTo: "puppy", priority: "urgent", defaultDueTime: "00:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 2: NEONATAL CRITICAL CARE (Days 1-3)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Weigh all puppies (morning)", taskDescription: "Record weight in grams. Puppies should gain 5-10% of birth weight daily. Flag any weight loss immediately.", category: "health", appliesTo: "puppy", priority: "urgent", defaultDueTime: "07:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Weigh all puppies (evening)", taskDescription: "Second daily weight check. Compare to morning weight. Ensure consistent gain.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "19:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Check nursing quality for each puppy", taskDescription: "Observe each puppy latching and nursing. Note strong, normal, weak, or not nursing. Supplement if needed.", category: "feeding", appliesTo: "puppy", priority: "urgent", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Monitor puppy temperature", taskDescription: "Neonates cannot regulate body temp. Whelping box should be 85-90\xB0F. Check for cold or overheated puppies.", category: "health", appliesTo: "litter", priority: "urgent", defaultDueTime: "07:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Stimulate elimination (if dam not doing it)", taskDescription: "Gently rub genital area with warm damp cloth to stimulate urination and defecation. Note stool quality.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Change whelping box bedding", taskDescription: "Replace soiled bedding with clean, dry material. Ensure no drafts. Keep area sanitized.", category: "cleaning", appliesTo: "litter", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Monitor dam's appetite and behavior", taskDescription: "Dam should be eating well and attentive to puppies. Note any signs of mastitis, eclampsia, or rejection.", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 3, taskTitle: "Check dam's milk supply", taskDescription: "Ensure adequate milk production. Check teats for signs of mastitis (heat, swelling, discoloration).", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "10:00" },
  // Days 1-7 Critical Dam Care (extended range)
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Dam appetite check", taskDescription: "Verify dam is eating adequately. High caloric demand during lactation \u2014 offer 2-3x normal intake. Note if refusing food or eating less than expected.", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "07:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Dam water intake check", taskDescription: "Ensure dam has constant access to fresh water. High demand during lactation. Monitor for adequate hydration.", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "07:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Mammary gland inspection", taskDescription: "Inspect all mammary glands for: swelling, heat, hardness, discoloration, and pain response. Compare left and right sides.", category: "health", appliesTo: "dam", priority: "urgent", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Monitor for mastitis signs", taskDescription: "Watch for: red/purple discoloration of teats, hot/hard glands, dam flinching when puppies nurse, fever, lethargy, or refusal to nurse. Contact vet immediately if suspected.", category: "health", appliesTo: "dam", priority: "urgent", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Check vaginal discharge", taskDescription: "Monitor vaginal discharge for: color (dark green/black normal first 24-48hrs, then reddish-brown), smell (foul odor = infection), and volume. Contact vet if bright red bleeding, foul smell, or pus.", category: "health", appliesTo: "dam", priority: "high", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Monitor dam temperature if concerns", taskDescription: "Normal range: 100-102.5\xB0F. Take temperature if dam seems lethargic, off food, or showing signs of infection. Fever above 103\xB0F requires vet contact.", category: "health", appliesTo: "dam", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Observe nursing behavior", taskDescription: "Watch dam's nursing behavior: Is she attentive or avoidant? Does she position herself for puppies? Does she clean/stimulate them? Note any signs of rejection or reluctance.", category: "dam_care", appliesTo: "dam", priority: "high", defaultDueTime: "08:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Ensure dam allows puppy rotation", taskDescription: "Verify dam allows all puppies to nurse, including smaller/weaker ones. Rotate puppies to front teats (more milk) if needed.", category: "feeding", appliesTo: "dam", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Clean whelping box (multiple times daily)", taskDescription: "Clean whelping box at least 2-3 times daily. Remove soiled spots immediately. Wipe down surfaces. Maintain sanitary environment.", category: "cleaning", appliesTo: "litter", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Replace bedding frequently", taskDescription: "Change bedding whenever soiled. Use clean, absorbent material. Avoid loose fabrics that puppies can get tangled in. Keep whelping area dry and warm.", category: "cleaning", appliesTo: "litter", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Neonatal Critical Care", startDay: 1, endDay: 7, taskTitle: "Monitor dam stress and fatigue levels", taskDescription: "Watch for signs of stress/fatigue: excessive panting, restlessness, leaving puppies frequently, not sleeping. Provide quiet environment. Limit visitors.", category: "dam_care", appliesTo: "dam", priority: "normal", defaultDueTime: "12:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 3: ENS / EARLY HANDLING (Days 4-16)
  // ═══════════════════════════════════════════════════════════════════════════
  // Bio Sensor Exercises (per puppy, daily)
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "ENS: Tactile stimulation", taskDescription: "Hold puppy in one hand. Using a Q-tip, gently stimulate between the toes on any one foot for 3-5 seconds. Puppy does not have to feel it \u2014 the stimulation is neurological, not behavioral.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "ENS: Head held erect", taskDescription: "Using both hands, hold the puppy perpendicular to the ground (head directly above tail) so it is pointing straight up. Hold for 3-5 seconds.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "ENS: Head pointed down", taskDescription: "Firmly holding the puppy in both hands, point the head downward so it is facing the ground. Hold for 3-5 seconds.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "ENS: Supine position", taskDescription: "Hold the puppy so that its back is resting in the palm of both hands with the muzzle facing the ceiling. Hold for 3-5 seconds.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "ENS: Thermal stimulation", taskDescription: "Place puppy feet-down on a cool damp cloth (refrigerated for at least 5 minutes) for 3-5 seconds. Do not restrain the puppy \u2014 allow it to move freely on the cloth.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Log ENS session results", taskDescription: "After completing all 5 Bio Sensor exercises for each puppy, log the session in the curriculum log. Note any unusual reactions: excessive crying, no response, or abnormal movement.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "10:30" },
  // Early Handling Exercises (per puppy, daily)
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Early handling: Gentle body massage", taskDescription: "Gently massage each puppy's entire body for 30-60 seconds. Touch ears, paws, tail, muzzle, and belly. This builds tolerance for future handling, grooming, and vet exams.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Early handling: Paw and nail touch", taskDescription: "Gently hold and touch each paw, spreading toes and touching nails. This desensitizes puppies to future nail trimming and paw handling.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Early handling: Ear and mouth touch", taskDescription: "Gently touch inside and outside of ears. Briefly lift lips and touch gums. Prepares puppies for ear cleaning, dental checks, and medication administration.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Early handling: Different surface exposure", taskDescription: "Briefly place puppy on a different textured surface (towel, fleece, rubber mat) for 10-15 seconds. Rotate surfaces daily. Builds early confidence with novel textures.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Early handling: Scent introduction", taskDescription: "Present a novel scent near (not on) the puppy for a few seconds \u2014 examples: vanilla extract on cotton ball, fresh herbs, worn clothing. Rotate scents daily to stimulate olfactory development.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  // Litter-level daily tasks during ENS period
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Weigh all puppies (daily)", taskDescription: "Weigh each puppy and record in the weight log. Monitor for consistent daily weight gain. Flag any puppy that loses weight from previous day.", category: "health", appliesTo: "litter", priority: "high", defaultDueTime: "07:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Monitor nursing quality per puppy", taskDescription: "Observe each puppy nursing. Ensure all puppies are latching and nursing strongly. Rotate smaller or weaker puppies to rear teats (most milk). Flag any puppy not nursing.", category: "health", appliesTo: "litter", priority: "high", defaultDueTime: "08:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Check umbilical sites", taskDescription: "Inspect each puppy's umbilical site for signs of infection (redness, swelling, discharge, odor). Umbilical cords should dry and fall off by day 5-7. Report any concerns immediately.", category: "health", appliesTo: "litter", priority: "normal", defaultDueTime: "08:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Nail trim check (first trim ~day 7-10)", taskDescription: "Check puppy nails starting around day 7. Tiny sharp nails can scratch the dam's mammary tissue and cause mastitis. Trim tips with small nail clippers if needed.", category: "health", appliesTo: "litter", priority: "normal", defaultDueTime: "09:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Whelping box cleaning and bedding change", taskDescription: "Clean whelping box thoroughly. Replace soiled bedding with fresh, dry bedding. Ensure heating pad or heat lamp is functioning and set to appropriate temperature.", category: "cleaning", appliesTo: "litter", priority: "high", defaultDueTime: "09:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Dam wellness check", taskDescription: "Check dam's appetite, water intake, mammary glands, and vaginal discharge. Monitor for mastitis signs (hot, hard, red, painful mammary tissue). Ensure dam is resting comfortably between nursing sessions.", category: "dam_care", appliesTo: "litter", priority: "high", defaultDueTime: "08:00" },
  { stageName: "ENS / Early Handling", startDay: 10, endDay: 16, taskTitle: "Eyes and ears opening check", taskDescription: "Puppies' eyes begin opening around days 10-14 and ears around days 13-17. Check daily for signs of opening. Note any discharge, swelling, or asymmetry. Do NOT force eyes or ears open.", category: "health", appliesTo: "litter", priority: "normal", defaultDueTime: "10:00" },
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Ambient sound introduction", taskDescription: "Play low-level ambient sounds near the whelping area (radio, TV, household sounds) to begin passive sound exposure. Keep volume low \u2014 puppies' ears are still developing.", category: "curriculum", appliesTo: "litter", priority: "low", defaultDueTime: "12:00" },
  // Original ENS tasks retained for backward compatibility
  { stageName: "ENS / Early Handling", startDay: 4, endDay: 16, taskTitle: "Deworm puppies (Day 14)", taskDescription: "First deworming at 2 weeks. Use vet-recommended pyrantel pamoate. Record product, dose, and route.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "09:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 4: TRANSITION / GRUEL INTRO (Days 15-21)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Daily weight check", taskDescription: "Continue daily weights. Growth should be steady. Puppies beginning to walk and explore.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "07:00" },
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Introduce gruel (Day 18-21)", taskDescription: "Mix high-quality puppy food with warm water/formula to soupy consistency. Offer in shallow dish. Monitor interest and intake.", category: "feeding", appliesTo: "litter", priority: "high", defaultDueTime: "11:00" },
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Novel surface exposure", taskDescription: "Place puppies on different surfaces: tile, carpet, grass mat, crinkle paper. Note confidence vs. hesitation.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "10:00" },
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Sound exposure (low level)", taskDescription: "Play gentle sounds: classical music, household noises, TV. Keep volume low. Observe startle response and recovery.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "14:00" },
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Clean and expand living area", taskDescription: "Puppies becoming mobile. Expand pen area. Add potty area separate from sleeping area. Full cleaning.", category: "cleaning", appliesTo: "litter", priority: "normal", defaultDueTime: "09:00" },
  { stageName: "Transition / Gruel Intro", startDay: 15, endDay: 21, taskTitle: "Begin weaning process for dam", taskDescription: "Start reducing dam's food slightly. Allow shorter nursing sessions. Monitor dam's comfort and milk production.", category: "dam_care", appliesTo: "dam", priority: "normal", defaultDueTime: "08:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 5: SOCIALIZATION FOUNDATION (Days 22-28)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Daily weight check", taskDescription: "Weekly weights minimum now. Puppies should be gaining steadily with gruel supplementation.", category: "health", appliesTo: "puppy", priority: "normal", defaultDueTime: "07:00" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Gruel feeding (3x daily)", taskDescription: "Offer gruel 3 times daily. Gradually thicken consistency. Monitor each puppy's appetite and intake.", category: "feeding", appliesTo: "litter", priority: "high", defaultDueTime: "07:30" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Human socialization sessions", taskDescription: "Expose puppies to different people (men, women, children if available). Gentle handling by multiple handlers.", category: "curriculum", appliesTo: "litter", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Novel object introduction", taskDescription: "Introduce new objects: balls, stuffed toys, tunnels, wobble boards. Note approach behavior and recovery time.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "14:00" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Sound desensitization (medium level)", taskDescription: "Increase sound variety: doorbell, vacuum (distant), dog barking recording, thunder. Record responses.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Deworm puppies (Day 28)", taskDescription: "Second deworming. Record product, dose, and any reactions. Follow vet protocol.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Socialization Foundation", startDay: 22, endDay: 28, taskTitle: "Clean puppy area (2x daily)", taskDescription: "Full cleaning morning and evening. Separate potty area from sleep/play area. Disinfect food dishes.", category: "cleaning", appliesTo: "litter", priority: "normal", defaultDueTime: "09:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 6: CONFIDENCE BUILDING (Days 29-35)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Weekly weight check", taskDescription: "Record weights. Growth should be consistent. Note any puppies falling behind.", category: "health", appliesTo: "puppy", priority: "normal", defaultDueTime: "07:00" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Solid food transition", taskDescription: "Transition from gruel to moistened kibble. Offer 3-4 meals daily. Monitor stool quality during transition.", category: "feeding", appliesTo: "litter", priority: "high", defaultDueTime: "07:30" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Adventure walk / outdoor exposure", taskDescription: "Supervised outdoor time in safe area. Expose to grass, sun, wind, outdoor sounds. Note confidence levels.", category: "curriculum", appliesTo: "litter", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Individual puppy handling (5 min each)", taskDescription: "One-on-one time with each puppy away from littermates. Assess independence, confidence, and bonding.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "14:00" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Obstacle course / confidence building", taskDescription: "Set up simple obstacles: low steps, tunnels, wobble boards, different surfaces. Encourage exploration.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Crate introduction", taskDescription: "Begin positive crate association. Place treats and toys inside open crate. Short sessions, never forced.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "15:00" },
  { stageName: "Confidence Building", startDay: 29, endDay: 35, taskTitle: "Complete weaning from dam", taskDescription: "Dam should be fully separated for meals. Nursing sessions reduced to 1-2 brief periods if any.", category: "dam_care", appliesTo: "dam", priority: "normal", defaultDueTime: "08:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 7: DRIVE + NERVE DEVELOPMENT (Days 36-42)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Weekly weight check", taskDescription: "Record weights. Puppies should be eating solid food independently.", category: "health", appliesTo: "puppy", priority: "normal", defaultDueTime: "07:00" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Feed solid meals (3x daily)", taskDescription: "Full kibble meals 3x daily. Monitor individual intake. Ensure all puppies eating well.", category: "feeding", appliesTo: "litter", priority: "high", defaultDueTime: "07:30" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Prey drive assessment", taskDescription: "Use flirt pole or drag toy. Note chase drive, grip, possessiveness, and willingness to engage. Record scores.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Startle recovery test", taskDescription: "Drop a book or pan near puppies. Note startle response, recovery time, and approach behavior after. Record for each puppy.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "11:00" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Car ride exposure", taskDescription: "Short car ride (5-10 min). Note comfort level, motion sickness, recovery. Positive association with treats.", category: "curriculum", appliesTo: "litter", priority: "normal", defaultDueTime: "14:00" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "Deworm puppies (Day 42)", taskDescription: "Third deworming. Record product, dose, and reactions. Follow vet protocol.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Drive + Nerve Development", startDay: 36, endDay: 42, taskTitle: "First vaccine (Day 42 \u2014 vet protocol)", taskDescription: "Schedule and administer first puppy vaccine per vet protocol. Record vaccine type, lot number, and site.", category: "health", appliesTo: "puppy", priority: "urgent", defaultDueTime: "09:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 8: ADVANCED EXPOSURE (Days 43-49)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Weekly weight check", taskDescription: "Record weights. Note growth trends for evaluation preparation.", category: "health", appliesTo: "puppy", priority: "normal", defaultDueTime: "07:00" },
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Feed solid meals (3x daily)", taskDescription: "Continue 3x daily meals. Individual feeding if needed to monitor intake.", category: "feeding", appliesTo: "litter", priority: "normal", defaultDueTime: "07:30" },
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Advanced socialization outing", taskDescription: "Take puppies to new environments (pet-friendly stores, friend's yard). Expose to new people, surfaces, sounds.", category: "curriculum", appliesTo: "litter", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Individual temperament observations", taskDescription: "Spend 10 min alone with each puppy. Note: independence, toy drive, human focus, problem-solving, recovery from novelty.", category: "curriculum", appliesTo: "puppy", priority: "high", defaultDueTime: "14:00" },
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Leash introduction", taskDescription: "Attach lightweight leash/ribbon. Let puppies drag it supervised. Begin gentle leash pressure. Reward forward movement.", category: "curriculum", appliesTo: "puppy", priority: "normal", defaultDueTime: "11:00" },
  { stageName: "Advanced Exposure", startDay: 43, endDay: 49, taskTitle: "Take individual puppy photos/videos", taskDescription: "Professional-quality photos of each puppy for buyer packets and records. Include stacked photos and candid shots.", category: "admin", appliesTo: "puppy", priority: "normal", defaultDueTime: "15:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 9: EVALUATIONS + MATCHING (Days 49-56)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Conduct formal puppy evaluations", taskDescription: "Run full evaluation protocol: social attraction, following, restraint, social dominance, elevation, retrieving, touch sensitivity, sound sensitivity, sight sensitivity, stability.", category: "evaluation", appliesTo: "puppy", priority: "urgent", defaultDueTime: "09:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Score and document evaluations", taskDescription: "Complete scoring for all evaluation categories (1-5 scale). Write up strengths, concerns, and placement recommendations.", category: "evaluation", appliesTo: "puppy", priority: "urgent", defaultDueTime: "14:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Match puppies to buyers", taskDescription: "Review buyer applications against evaluation results. Recommend matches based on lifestyle, experience, and goals.", category: "evaluation", appliesTo: "puppy", priority: "high", defaultDueTime: "15:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Contact buyers with match recommendations", taskDescription: "Send match notifications to approved buyers. Include evaluation summary and puppy profile.", category: "admin", appliesTo: "puppy", priority: "high", defaultDueTime: "16:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Second vaccine (Day 49-56 \u2014 vet protocol)", taskDescription: "Administer second puppy vaccine per vet protocol. Record vaccine type, lot number, and site.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "09:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Microchip puppies", taskDescription: "Implant microchips. Record microchip numbers in puppy profiles. Register with microchip company.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Evaluations + Matching", startDay: 49, endDay: 56, taskTitle: "Deworm puppies (Day 56)", taskDescription: "Fourth deworming. Record product, dose, and reactions.", category: "health", appliesTo: "puppy", priority: "high", defaultDueTime: "09:00" },
  // ═══════════════════════════════════════════════════════════════════════════
  // STAGE 10: GO-HOME PREP (Days 56+)
  // ═══════════════════════════════════════════════════════════════════════════
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Final vet exam for each puppy", taskDescription: "Schedule and complete final vet wellness exam. Get health certificate. Note any concerns.", category: "go_home", appliesTo: "puppy", priority: "urgent", defaultDueTime: "09:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Prepare buyer packets", taskDescription: "Assemble: health records, vaccine history, deworming schedule, feeding instructions, training tips, contract, registration papers.", category: "go_home", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Verify contracts signed", taskDescription: "Ensure all buyer contracts are signed and returned. Review spay/neuter agreements, health guarantees, and return policies.", category: "go_home", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Verify payments received", taskDescription: "Confirm final payment received for each puppy. Issue receipt. Note payment method.", category: "go_home", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Pack go-home bags", taskDescription: "Include: food sample (3-day supply), favorite toy, blanket with litter scent, care instructions, vet contact info.", category: "go_home", appliesTo: "puppy", priority: "normal", defaultDueTime: "14:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Send final photos/videos to buyers", taskDescription: "Send professional photos and a short video of each puppy to their matched buyer before pickup day.", category: "go_home", appliesTo: "puppy", priority: "normal", defaultDueTime: "15:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Schedule pickup times", taskDescription: "Coordinate pickup times with each buyer. Stagger appointments to avoid crowding. Confirm date and time.", category: "go_home", appliesTo: "puppy", priority: "high", defaultDueTime: "10:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Final condition check before release", taskDescription: "Day-of check: weight, temperature, stool quality, general condition. Note any last-minute concerns.", category: "go_home", appliesTo: "puppy", priority: "urgent", defaultDueTime: "08:00" },
  { stageName: "Go-Home Prep", startDay: 56, endDay: 999, taskTitle: "Complete go-home checklist", taskDescription: "Verify all 12 checklist items are complete before releasing puppy: vet exam, vaccines, deworming, microchip, contract, payment, packet, food, care instructions, pickup, photos, condition check.", category: "go_home", appliesTo: "puppy", priority: "urgent", defaultDueTime: "07:00" }
];
async function seedBreedingTaskTemplates() {
  const db = await getDb();
  if (!db) throw new Error("DB unavailable");
  const existing = await db.select({ c: (0, import_drizzle_orm7.count)() }).from(taskTemplates);
  const existingCount = existing[0]?.c ?? 0;
  if (existingCount > 0) {
    return { seeded: 0, total: existingCount };
  }
  for (const tmpl of TEMPLATES) {
    await db.insert(taskTemplates).values({
      stageName: tmpl.stageName,
      startDay: tmpl.startDay,
      endDay: tmpl.endDay,
      taskTitle: tmpl.taskTitle,
      taskDescription: tmpl.taskDescription,
      category: tmpl.category,
      appliesTo: tmpl.appliesTo,
      priority: tmpl.priority,
      defaultDueTime: tmpl.defaultDueTime,
      active: true
    });
  }
  return { seeded: TEMPLATES.length, total: TEMPLATES.length };
}

// server/routers.ts
init_notification();
var appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    })
  }),
  // ─── DASHBOARD ──────────────────────────────────────────────────────────
  dashboard: router({
    stats: publicProcedure.query(() => getDashboardStats())
  }),
  // ─── CLIENTS ────────────────────────────────────────────────────────────
  clients: router({
    list: publicProcedure.input(import_zod2.z.object({ search: import_zod2.z.string().optional() }).optional()).query(({ input }) => listClients(input?.search)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getClient(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      firstName: import_zod2.z.string().min(1),
      lastName: import_zod2.z.string().min(1),
      email: import_zod2.z.string().optional(),
      phone: import_zod2.z.string().optional(),
      leadStatus: import_zod2.z.enum(["new", "contacted", "qualified", "waitlist", "active", "past"]).optional(),
      leadSource: import_zod2.z.enum(["meta", "wix", "referral", "website", "other"]).optional(),
      notes: import_zod2.z.string().optional(),
      tags: import_zod2.z.array(import_zod2.z.string()).optional()
    })).mutation(({ input }) => createClient(input)),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      firstName: import_zod2.z.string().optional(),
      lastName: import_zod2.z.string().optional(),
      email: import_zod2.z.string().optional(),
      phone: import_zod2.z.string().optional(),
      leadStatus: import_zod2.z.enum(["new", "contacted", "qualified", "waitlist", "active", "past"]).optional(),
      leadSource: import_zod2.z.enum(["meta", "wix", "referral", "website", "other"]).optional(),
      notes: import_zod2.z.string().optional(),
      tags: import_zod2.z.array(import_zod2.z.string()).optional()
    })).mutation(async ({ input }) => {
      const { id, ...data } = input;
      if (data.leadStatus === "active" || data.leadStatus === "past") {
        try {
          await cancelFollowupLogsForClient(id);
          await createClientComm({
            clientId: id,
            type: "note",
            content: `Lead converted to ${data.leadStatus.toUpperCase()}. All pending follow-up messages cancelled.`
          });
        } catch (err) {
          console.error(`[Conversion] Failed to cancel follow-ups for client #${id}:`, err);
        }
      }
      return updateClient(id, data);
    }),
    batchDelete: publicProcedure.input(import_zod2.z.object({ ids: import_zod2.z.array(import_zod2.z.number()).min(1) })).mutation(({ input }) => batchDeleteClients(input.ids)),
    batchUpdateStatus: publicProcedure.input(import_zod2.z.object({
      ids: import_zod2.z.array(import_zod2.z.number()).min(1),
      status: import_zod2.z.enum(["new", "contacted", "qualified", "waitlist", "active", "past"])
    })).mutation(({ input }) => batchUpdateClientStatus(input.ids, input.status)),
    comms: router({
      list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => listClientComms(input.clientId)),
      create: publicProcedure.input(import_zod2.z.object({
        clientId: import_zod2.z.number(),
        type: import_zod2.z.enum(["email", "sms", "call", "note"]),
        content: import_zod2.z.string().optional(),
        staffId: import_zod2.z.number().optional()
      })).mutation(({ input }) => createClientComm(input))
    })
  }),
  // ─── DOGS ───────────────────────────────────────────────────────────────
  dogs: router({
    list: publicProcedure.input(import_zod2.z.object({ search: import_zod2.z.string().optional() }).optional()).query(({ input }) => listDogs(input?.search)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getDog(input.id)),
    byClient: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => listDogsByClient(input.clientId)),
    create: publicProcedure.input(import_zod2.z.object({
      name: import_zod2.z.string().min(1),
      clientId: import_zod2.z.number().optional(),
      breed: import_zod2.z.string().optional(),
      dateOfBirth: import_zod2.z.string().optional(),
      gender: import_zod2.z.enum(["M", "F"]).optional(),
      isIntact: import_zod2.z.boolean().optional(),
      weight: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["active", "personal", "rehomed", "sold", "boarding", "retired"]).optional(),
      behaviorNotes: import_zod2.z.string().optional(),
      medicalNotes: import_zod2.z.string().optional(),
      feedingNotes: import_zod2.z.string().optional(),
      isBreeder: import_zod2.z.boolean().optional(),
      alertBiteRisk: import_zod2.z.boolean().optional(),
      alertInHeat: import_zod2.z.boolean().optional(),
      alertDogReactive: import_zod2.z.boolean().optional(),
      alertNervous: import_zod2.z.boolean().optional(),
      alertHandleWithCaution: import_zod2.z.boolean().optional()
    })).mutation(({ input }) => {
      return createDog({
        ...input,
        dateOfBirth: input.dateOfBirth ? new Date(input.dateOfBirth) : void 0
      });
    }),
    uploadPhoto: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      base64: import_zod2.z.string(),
      mimeType: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const mime = input.mimeType || "image/jpeg";
      const ext = mime.includes("png") ? "png" : "jpg";
      const buffer = Buffer.from(input.base64, "base64");
      const key = `dog-photos/${input.dogId}-${Date.now()}.${ext}`;
      const { url } = await storagePut(key, buffer, mime);
      await updateDog(input.dogId, { photoUrl: url });
      return { url };
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      name: import_zod2.z.string().optional(),
      clientId: import_zod2.z.number().nullable().optional(),
      breed: import_zod2.z.string().optional(),
      dateOfBirth: import_zod2.z.string().optional(),
      gender: import_zod2.z.enum(["M", "F"]).optional(),
      isIntact: import_zod2.z.boolean().optional(),
      weight: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["active", "personal", "rehomed", "sold", "boarding", "retired"]).optional(),
      behaviorNotes: import_zod2.z.string().optional(),
      medicalNotes: import_zod2.z.string().optional(),
      feedingNotes: import_zod2.z.string().optional(),
      isBreeder: import_zod2.z.boolean().optional(),
      photoUrl: import_zod2.z.string().optional(),
      alertBiteRisk: import_zod2.z.boolean().optional(),
      alertInHeat: import_zod2.z.boolean().optional(),
      alertDogReactive: import_zod2.z.boolean().optional(),
      alertNervous: import_zod2.z.boolean().optional(),
      alertHandleWithCaution: import_zod2.z.boolean().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      const updateData = { ...data };
      if (data.dateOfBirth) updateData.dateOfBirth = new Date(data.dateOfBirth);
      return updateDog(id, updateData);
    }),
    batchDelete: publicProcedure.input(import_zod2.z.object({ ids: import_zod2.z.array(import_zod2.z.number()).min(1) })).mutation(({ input }) => batchDeleteDogs(input.ids)),
    batchUpdateStatus: publicProcedure.input(import_zod2.z.object({
      ids: import_zod2.z.array(import_zod2.z.number()).min(1),
      status: import_zod2.z.enum(["active", "personal", "rehomed", "sold", "boarding", "retired"])
    })).mutation(({ input }) => batchUpdateDogStatus(input.ids, input.status)),
    batchReassignTrainer: publicProcedure.input(import_zod2.z.object({
      dogIds: import_zod2.z.array(import_zod2.z.number()).min(1),
      staffId: import_zod2.z.number()
    })).mutation(({ input }) => batchReassignDogTrainer(input.dogIds, input.staffId)),
    activeBoardingDogIds: publicProcedure.query(() => getActiveBoardingDogIds())
  }),
  // ─── APPOINTMENTS ───────────────────────────────────────────────────────
  // ─── CALENDAR ──────────────────────────────────────────────────────────
  calendar: router({
    events: publicProcedure.input(import_zod2.z.object({ startDate: import_zod2.z.string(), endDate: import_zod2.z.string() })).query(({ input }) => listCalendarEvents(input.startDate, input.endDate))
  }),
  appointments: router({
    list: publicProcedure.input(import_zod2.z.object({ date: import_zod2.z.string().optional(), staffId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listAppointments(input)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getAppointment(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number().optional(),
      dogId: import_zod2.z.number().optional(),
      staffId: import_zod2.z.number().optional(),
      type: import_zod2.z.enum(["training", "eval", "boarding", "breeding", "grooming", "other"]).optional(),
      title: import_zod2.z.string().optional(),
      startTime: import_zod2.z.string(),
      endTime: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["scheduled", "completed", "cancelled", "no_show"]).optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const result = await createAppointment({
        ...input,
        startTime: new Date(input.startTime),
        endTime: input.endTime ? new Date(input.endTime) : void 0
      });
      if (result?.id) {
        syncAppointmentToGoogle(result.id).catch((e) => console.error("[GCal] bg sync failed:", e));
      }
      return result;
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      clientId: import_zod2.z.number().optional(),
      dogId: import_zod2.z.number().optional(),
      staffId: import_zod2.z.number().optional(),
      type: import_zod2.z.enum(["training", "eval", "boarding", "breeding", "grooming", "other"]).optional(),
      title: import_zod2.z.string().optional(),
      startTime: import_zod2.z.string().optional(),
      endTime: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["scheduled", "completed", "cancelled", "no_show"]).optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const { id, startTime, endTime, ...rest } = input;
      const data = { ...rest };
      if (startTime) data.startTime = new Date(startTime);
      if (endTime) data.endTime = new Date(endTime);
      const result = await updateAppointment(id, data);
      if (input.status === "cancelled") {
        deleteAppointmentFromGoogle(id).catch((e) => console.error("[GCal] bg delete failed:", e));
      } else {
        syncAppointmentToGoogle(id).catch((e) => console.error("[GCal] bg sync failed:", e));
      }
      return result;
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(async ({ input }) => {
      await deleteAppointmentFromGoogle(input.id).catch((e) => console.error("[GCal] bg delete failed:", e));
      return deleteAppointment(input.id);
    })
  }),
  // ─── TRAINING ───────────────────────────────────────────────────────────
  training: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => listTrainingLogs(input.dogId)),
    create: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      trainerId: import_zod2.z.number().optional(),
      appointmentId: import_zod2.z.number().optional(),
      sessionDate: import_zod2.z.string(),
      obedienceScore: import_zod2.z.number().min(1).max(10).optional(),
      behaviorScore: import_zod2.z.number().min(1).max(10).optional(),
      notes: import_zod2.z.string().optional(),
      aiSummary: import_zod2.z.string().optional(),
      visibleToClient: import_zod2.z.boolean().optional()
    })).mutation(({ input }) => {
      return createTrainingLog({
        ...input,
        sessionDate: new Date(input.sessionDate)
      });
    })
  }),
  // ─── BREEDING ───────────────────────────────────────────────────────────
  breeding: router({
    cycles: router({
      list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listBreedingCycles(input?.dogId)),
      create: publicProcedure.input(import_zod2.z.object({
        femaleDogId: import_zod2.z.number(),
        startDate: import_zod2.z.string(),
        endDate: import_zod2.z.string().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        return createBreedingCycle({
          ...input,
          startDate: new Date(input.startDate),
          endDate: input.endDate ? new Date(input.endDate) : void 0
        });
      })
    }),
    litters: router({
      list: publicProcedure.query(() => listLittersWithDetails()),
      get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getLitterDetail(input.id)),
      create: publicProcedure.input(import_zod2.z.object({
        litterName: import_zod2.z.string(),
        sireId: import_zod2.z.number().optional(),
        damId: import_zod2.z.number().optional(),
        breedingCycleId: import_zod2.z.number().optional(),
        firstTieDate: import_zod2.z.string().optional(),
        aiDate: import_zod2.z.string().optional(),
        estimatedDueDate: import_zod2.z.string().optional(),
        birthDate: import_zod2.z.string().optional(),
        estimatedGoHomeDate: import_zod2.z.string().optional(),
        breedCross: import_zod2.z.string().optional(),
        pregnancyStatus: import_zod2.z.enum(["planned", "bred", "confirmed_pregnant", "not_pregnant", "whelped", "closed"]).optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        return createLitterFull({
          ...input,
          status: "planned",
          firstTieDate: input.firstTieDate,
          aiDate: input.aiDate,
          estimatedDueDate: input.estimatedDueDate,
          birthDate: input.birthDate,
          estimatedGoHomeDate: input.estimatedGoHomeDate
        });
      }),
      update: publicProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        litterName: import_zod2.z.string().optional(),
        sireId: import_zod2.z.number().optional(),
        damId: import_zod2.z.number().optional(),
        firstTieDate: import_zod2.z.string().nullable().optional(),
        aiDate: import_zod2.z.string().nullable().optional(),
        estimatedDueDate: import_zod2.z.string().nullable().optional(),
        birthDate: import_zod2.z.string().nullable().optional(),
        estimatedGoHomeDate: import_zod2.z.string().nullable().optional(),
        actualGoHomeStartDate: import_zod2.z.string().nullable().optional(),
        breedCross: import_zod2.z.string().optional(),
        pregnancyStatus: import_zod2.z.enum(["planned", "bred", "confirmed_pregnant", "not_pregnant", "whelped", "closed"]).optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return updateLitterFull(id, data);
      })
    }),
    puppies: router({
      list: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number() })).query(({ input }) => listPuppiesWithFlags(input.litterId)),
      get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getPuppyDetail(input.id)),
      create: publicProcedure.input(import_zod2.z.object({
        litterId: import_zod2.z.number(),
        puppyNumber: import_zod2.z.number().optional(),
        temporaryName: import_zod2.z.string().optional(),
        collarColor: import_zod2.z.string().optional(),
        sex: import_zod2.z.enum(["male", "female", "unknown"]).optional(),
        birthTime: import_zod2.z.string().optional(),
        birthWeightGrams: import_zod2.z.string().optional(),
        colorMarkings: import_zod2.z.string().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(async ({ input }) => {
        const result = await createPuppyFull({
          ...input,
          birthTime: input.birthTime ? new Date(input.birthTime) : void 0,
          currentWeightGrams: input.birthWeightGrams
        });
        const taskResult = await generateTasksForNewPuppy(result.id, input.litterId);
        return { ...result, tasksGenerated: taskResult.generated };
      }),
      update: publicProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        puppyNumber: import_zod2.z.number().optional(),
        temporaryName: import_zod2.z.string().optional(),
        registeredName: import_zod2.z.string().optional(),
        collarColor: import_zod2.z.string().optional(),
        sex: import_zod2.z.enum(["male", "female", "unknown"]).optional(),
        colorMarkings: import_zod2.z.string().optional(),
        microchipNumber: import_zod2.z.string().optional(),
        status: import_zod2.z.enum(["available", "reserved", "matched", "sold", "keep_back", "monitoring", "deceased"]).optional(),
        placementType: import_zod2.z.string().optional(),
        assignedClientId: import_zod2.z.number().nullable().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return updatePuppyFull(id, data);
      })
    }),
    puppyLogs: router({
      list: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number(), limit: import_zod2.z.number().optional() })).query(({ input }) => listPuppyDailyLogs(input.puppyId, input.limit)),
      listByLitter: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number(), logDate: import_zod2.z.string() })).query(({ input }) => listPuppyDailyLogsByLitter(input.litterId, input.logDate)),
      upsert: publicProcedure.input(import_zod2.z.object({
        puppyId: import_zod2.z.number(),
        litterId: import_zod2.z.number(),
        logDate: import_zod2.z.string(),
        weightGrams: import_zod2.z.string().optional(),
        nursingQuality: import_zod2.z.enum(["strong", "normal", "weak", "not_nursing", "na"]).optional(),
        appetite: import_zod2.z.enum(["excellent", "normal", "poor", "refused", "na"]).optional(),
        stool: import_zod2.z.enum(["normal", "loose", "diarrhea", "none_observed", "na"]).optional(),
        urine: import_zod2.z.enum(["normal", "none_observed", "na"]).optional(),
        temperatureStatus: import_zod2.z.enum(["normal", "cool", "cold", "overheated", "not_checked"]).optional(),
        energyLevel: import_zod2.z.enum(["normal", "quiet", "lethargic", "hyperactive", "not_checked"]).optional(),
        interventionNeeded: import_zod2.z.boolean().optional(),
        interventionNotes: import_zod2.z.string().optional(),
        notes: import_zod2.z.string().optional(),
        loggedBy: import_zod2.z.number().optional()
      })).mutation(async ({ input }) => {
        const result = await upsertPuppyDailyLog(input);
        const newFlags = await runAutoFlagRules(input.puppyId, input.litterId, input.logDate);
        return { ...result, newFlags };
      }),
      bulkWeights: publicProcedure.input(import_zod2.z.object({
        entries: import_zod2.z.array(import_zod2.z.object({
          puppyId: import_zod2.z.number(),
          litterId: import_zod2.z.number(),
          logDate: import_zod2.z.string(),
          weightGrams: import_zod2.z.string(),
          loggedBy: import_zod2.z.number().optional()
        }))
      })).mutation(async ({ input }) => {
        const results = await bulkUpsertWeights(input.entries);
        const allNewFlags = [];
        for (const entry of input.entries) {
          const newFlags = await runAutoFlagRules(entry.puppyId, entry.litterId, entry.logDate);
          if (newFlags.length > 0) {
            allNewFlags.push({ puppyId: entry.puppyId, flags: newFlags });
          }
        }
        return { ...results, newFlags: allNewFlags };
      }),
      weightHistory: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number() })).query(({ input }) => getWeightHistory(input.puppyId))
    }),
    litterLogs: router({
      get: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number(), logDate: import_zod2.z.string() })).query(({ input }) => getLitterDailyLog(input.litterId, input.logDate)),
      list: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number() })).query(({ input }) => listLitterDailyLogs(input.litterId)),
      upsert: publicProcedure.input(import_zod2.z.object({
        litterId: import_zod2.z.number(),
        logDate: import_zod2.z.string(),
        ageDays: import_zod2.z.number().optional(),
        damAppetite: import_zod2.z.string().optional(),
        damBehavior: import_zod2.z.string().optional(),
        damHealthNotes: import_zod2.z.string().optional(),
        environmentNotes: import_zod2.z.string().optional(),
        cleaningCompleted: import_zod2.z.boolean().optional(),
        beddingChanged: import_zod2.z.boolean().optional(),
        overallLitterNotes: import_zod2.z.string().optional(),
        loggedBy: import_zod2.z.number().optional()
      })).mutation(({ input }) => upsertLitterDailyLog(input))
    }),
    tasks: router({
      templates: publicProcedure.query(() => listTaskTemplates()),
      seed: publicProcedure.mutation(() => seedBreedingTaskTemplates()),
      createTemplate: publicProcedure.input(import_zod2.z.object({
        stageName: import_zod2.z.string(),
        startDay: import_zod2.z.number(),
        endDay: import_zod2.z.number(),
        taskTitle: import_zod2.z.string(),
        taskDescription: import_zod2.z.string().optional(),
        category: import_zod2.z.enum(["whelping", "feeding", "cleaning", "health", "curriculum", "evaluation", "go_home", "admin", "dam_care"]).optional(),
        appliesTo: import_zod2.z.enum(["litter", "puppy", "dam"]).optional(),
        priority: import_zod2.z.enum(["low", "normal", "high", "urgent"]).optional(),
        defaultDueTime: import_zod2.z.string().optional()
      })).mutation(({ input }) => createTaskTemplate(input)),
      generate: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number(), ageDays: import_zod2.z.number(), taskDate: import_zod2.z.string() })).mutation(({ input }) => generateDailyTasksForLitter(input.litterId, input.ageDays, input.taskDate)),
      list: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number(), taskDate: import_zod2.z.string().optional() })).query(({ input }) => listBreedingDailyTasks(input.litterId, input.taskDate)),
      complete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number(), completedBy: import_zod2.z.number().optional() })).mutation(({ input }) => completeBreedingTask(input.id, input.completedBy)),
      bulkComplete: publicProcedure.input(import_zod2.z.object({ ids: import_zod2.z.array(import_zod2.z.number()), completedBy: import_zod2.z.number().optional() })).mutation(({ input }) => bulkCompleteBreedingTasks(input.ids, input.completedBy))
    }),
    flags: router({
      list: publicProcedure.query(() => listBreedingFlags()),
      ensureDefaults: publicProcedure.mutation(() => ensureDefaultFlags()),
      create: publicProcedure.input(import_zod2.z.object({
        name: import_zod2.z.string(),
        category: import_zod2.z.enum(["health", "behavior", "handling", "admin", "placement"]),
        severity: import_zod2.z.enum(["info", "watch", "warning", "critical"]).optional(),
        description: import_zod2.z.string().optional()
      })).mutation(({ input }) => createBreedingFlag(input)),
      addToP: publicProcedure.input(import_zod2.z.object({
        puppyId: import_zod2.z.number(),
        flagId: import_zod2.z.number(),
        notes: import_zod2.z.string().optional(),
        createdBy: import_zod2.z.number().optional()
      })).mutation(({ input }) => addPuppyFlag(input)),
      resolve: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number(), resolvedBy: import_zod2.z.number().optional() })).mutation(({ input }) => resolvePuppyFlag(input.id, input.resolvedBy)),
      puppyFlags: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number() })).query(({ input }) => listPuppyActiveFlags(input.puppyId))
    }),
    curriculum: router({
      list: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number().optional(), litterId: import_zod2.z.number().optional(), logDate: import_zod2.z.string().optional() })).query(({ input }) => listCurriculumLogs(input)),
      create: publicProcedure.input(import_zod2.z.object({
        litterId: import_zod2.z.number().optional(),
        puppyId: import_zod2.z.number().optional(),
        logDate: import_zod2.z.string(),
        category: import_zod2.z.string().optional(),
        activity: import_zod2.z.string(),
        completed: import_zod2.z.boolean().optional(),
        response: import_zod2.z.enum(["confident", "curious", "neutral", "hesitant", "fearful", "not_applicable"]).optional(),
        recoveryTime: import_zod2.z.enum(["immediate", "under_5_seconds", "5_15_seconds", "15_30_seconds", "over_30_seconds", "not_applicable"]).optional(),
        notes: import_zod2.z.string().optional(),
        loggedBy: import_zod2.z.number().optional()
      })).mutation(({ input }) => createCurriculumLog(input))
    }),
    health: router({
      list: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number().optional(), litterId: import_zod2.z.number().optional(), dogId: import_zod2.z.number().optional() })).query(({ input }) => listHealthEvents(input)),
      create: publicProcedure.input(import_zod2.z.object({
        litterId: import_zod2.z.number().optional(),
        puppyId: import_zod2.z.number().optional(),
        dogId: import_zod2.z.number().optional(),
        eventDate: import_zod2.z.string(),
        eventType: import_zod2.z.enum(["deworming", "vaccine", "vet_exam", "medication", "injury", "illness", "intervention", "death", "other"]).optional(),
        productOrMedication: import_zod2.z.string().optional(),
        dose: import_zod2.z.string().optional(),
        route: import_zod2.z.string().optional(),
        administeredBy: import_zod2.z.number().optional(),
        vetClinic: import_zod2.z.string().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => createHealthEvent(input))
    }),
    evaluations: router({
      list: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number() })).query(({ input }) => listEvaluations(input.puppyId)),
      create: publicProcedure.input(import_zod2.z.object({
        puppyId: import_zod2.z.number(),
        litterId: import_zod2.z.number().optional(),
        evaluationDate: import_zod2.z.string(),
        evaluatorId: import_zod2.z.number().optional(),
        overallRecommendation: import_zod2.z.string().optional(),
        placementType: import_zod2.z.enum([
          "pet_companion",
          "sport_prospect",
          "working_prospect",
          "personal_protection_prospect",
          "service_prospect",
          "therapy_facility_prospect",
          "breeding_prospect",
          "not_working_home"
        ]).optional(),
        strengths: import_zod2.z.string().optional(),
        concerns: import_zod2.z.string().optional(),
        buyerMatchNotes: import_zod2.z.string().optional(),
        scores: import_zod2.z.array(import_zod2.z.object({
          category: import_zod2.z.string(),
          score: import_zod2.z.number().min(1).max(5),
          notes: import_zod2.z.string().optional()
        })).optional()
      })).mutation(({ input }) => {
        const { scores, ...data } = input;
        return createEvaluation(data, scores);
      })
    }),
    matches: router({
      list: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number() })).query(({ input }) => listPuppyMatches(input.puppyId)),
      create: publicProcedure.input(import_zod2.z.object({
        puppyId: import_zod2.z.number(),
        clientId: import_zod2.z.number(),
        matchStatus: import_zod2.z.enum(["potential", "recommended", "approved", "client_accepted", "declined"]).optional(),
        reasonForMatch: import_zod2.z.string().optional(),
        concerns: import_zod2.z.string().optional()
      })).mutation(({ input }) => createPuppyMatch(input)),
      update: publicProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        matchStatus: import_zod2.z.enum(["potential", "recommended", "approved", "client_accepted", "declined"]).optional(),
        reasonForMatch: import_zod2.z.string().optional(),
        concerns: import_zod2.z.string().optional(),
        approvedBy: import_zod2.z.number().optional(),
        clientCommunicationSent: import_zod2.z.boolean().optional()
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return updatePuppyMatch(id, data);
      })
    }),
    goHome: router({
      get: publicProcedure.input(import_zod2.z.object({ puppyId: import_zod2.z.number() })).query(({ input }) => getGoHomeChecklist(input.puppyId)),
      upsert: publicProcedure.input(import_zod2.z.object({
        puppyId: import_zod2.z.number(),
        litterId: import_zod2.z.number().optional(),
        finalVetExamComplete: import_zod2.z.boolean().optional(),
        vaccinesComplete: import_zod2.z.boolean().optional(),
        dewormingComplete: import_zod2.z.boolean().optional(),
        microchipEntered: import_zod2.z.boolean().optional(),
        contractSigned: import_zod2.z.boolean().optional(),
        invoicePaid: import_zod2.z.boolean().optional(),
        buyerPacketPrepared: import_zod2.z.boolean().optional(),
        foodSentHome: import_zod2.z.boolean().optional(),
        careInstructionsSent: import_zod2.z.boolean().optional(),
        pickupScheduled: import_zod2.z.boolean().optional(),
        finalPhotoVideoSent: import_zod2.z.boolean().optional(),
        finalConditionCheckComplete: import_zod2.z.boolean().optional(),
        pickupDate: import_zod2.z.string().optional(),
        pickupTime: import_zod2.z.string().optional(),
        releasedTo: import_zod2.z.string().optional(),
        ownerAcknowledgment: import_zod2.z.boolean().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        const { puppyId, ...data } = input;
        return upsertGoHomeChecklist(puppyId, data);
      })
    }),
    media: router({
      list: publicProcedure.input(import_zod2.z.object({ litterId: import_zod2.z.number().optional(), puppyId: import_zod2.z.number().optional() })).query(({ input }) => listBreedingMedia(input)),
      create: publicProcedure.input(import_zod2.z.object({
        litterId: import_zod2.z.number().optional(),
        puppyId: import_zod2.z.number().optional(),
        evaluationId: import_zod2.z.number().optional(),
        healthEventId: import_zod2.z.number().optional(),
        fileUrl: import_zod2.z.string(),
        fileType: import_zod2.z.enum(["photo", "video", "document"]).optional(),
        caption: import_zod2.z.string().optional(),
        uploadedBy: import_zod2.z.number().optional()
      })).mutation(({ input }) => createBreedingMedia(input))
    }),
    alerts: publicProcedure.query(() => getBreedingAlerts()),
    waitlist: router({
      list: publicProcedure.query(() => listWaitlist()),
      create: publicProcedure.input(import_zod2.z.object({
        clientId: import_zod2.z.number(),
        preferences: import_zod2.z.string().optional(),
        depositPaid: import_zod2.z.boolean().optional(),
        depositAmount: import_zod2.z.string().optional(),
        status: import_zod2.z.enum(["waiting", "matched", "passed", "refunded"]).optional(),
        dateAdded: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        return createWaitlistEntry({
          ...input,
          dateAdded: input.dateAdded ? new Date(input.dateAdded) : void 0
        });
      }),
      update: publicProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        preferences: import_zod2.z.string().optional(),
        depositPaid: import_zod2.z.boolean().optional(),
        depositAmount: import_zod2.z.string().optional(),
        status: import_zod2.z.enum(["waiting", "matched", "passed", "refunded"]).optional()
      })).mutation(({ input }) => {
        const { id, ...data } = input;
        return updateWaitlistEntry(id, data);
      })
    })
  }),
  // ─── BOARDING ───────────────────────────────────────────────────────────
  boarding: router({
    reservations: router({
      list: publicProcedure.input(import_zod2.z.object({ status: import_zod2.z.string().optional() }).optional()).query(({ input }) => listBoardingReservations(input?.status)),
      get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getBoardingReservation(input.id)),
      create: publicProcedure.input(import_zod2.z.object({
        dogId: import_zod2.z.number(),
        clientId: import_zod2.z.number().optional(),
        checkInDate: import_zod2.z.string(),
        checkOutDate: import_zod2.z.string().optional(),
        kennelNumber: import_zod2.z.string().optional(),
        status: import_zod2.z.enum(["upcoming", "active", "completed", "cancelled"]).optional(),
        specialInstructions: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        return createBoardingReservation({
          ...input,
          checkInDate: new Date(input.checkInDate),
          checkOutDate: input.checkOutDate ? new Date(input.checkOutDate) : void 0
        });
      }),
      update: publicProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        dogId: import_zod2.z.number().optional(),
        clientId: import_zod2.z.number().optional(),
        checkInDate: import_zod2.z.string().optional(),
        checkOutDate: import_zod2.z.string().optional(),
        kennelNumber: import_zod2.z.string().optional(),
        status: import_zod2.z.enum(["upcoming", "active", "completed", "cancelled"]).optional(),
        specialInstructions: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        const { id, checkInDate, checkOutDate, ...rest } = input;
        const data = { ...rest };
        if (checkInDate) data.checkInDate = new Date(checkInDate);
        if (checkOutDate) data.checkOutDate = new Date(checkOutDate);
        return updateBoardingReservation(id, data);
      })
    }),
    dailyLogs: router({
      list: publicProcedure.input(import_zod2.z.object({ reservationId: import_zod2.z.number() })).query(({ input }) => listBoardingDailyLogs(input.reservationId)),
      create: publicProcedure.input(import_zod2.z.object({
        reservationId: import_zod2.z.number(),
        logDate: import_zod2.z.string(),
        staffId: import_zod2.z.number().optional(),
        ateMorning: import_zod2.z.boolean().optional(),
        ateEvening: import_zod2.z.boolean().optional(),
        medicationGiven: import_zod2.z.boolean().optional(),
        notes: import_zod2.z.string().optional()
      })).mutation(({ input }) => {
        return createBoardingDailyLog({
          ...input,
          logDate: new Date(input.logDate)
        });
      })
    })
  }),
  // ─── INVOICES ───────────────────────────────────────────────────────────
  invoices: router({
    list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listInvoices(input?.clientId)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getInvoice(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      amount: import_zod2.z.string(),
      description: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["draft", "sent", "paid", "overdue", "cancelled"]).optional(),
      dueDate: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      return createInvoice({
        ...input,
        dueDate: input.dueDate ? new Date(input.dueDate) : void 0
      });
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      amount: import_zod2.z.string().optional(),
      description: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["draft", "sent", "paid", "overdue", "cancelled"]).optional(),
      dueDate: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      const updateData = { ...data };
      if (data.dueDate) updateData.dueDate = new Date(data.dueDate);
      return updateInvoice(id, updateData);
    })
  }),
  // ─── CONTRACTS ──────────────────────────────────────────────────────────
  contracts: router({
    list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listContracts(input?.clientId)),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      dogId: import_zod2.z.number().optional(),
      type: import_zod2.z.enum(["training", "boarding", "puppy_sale", "other"]).optional(),
      documentUrl: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["pending", "signed", "expired"]).optional()
    })).mutation(({ input }) => createContract(input))
  }),
  // ─── INVENTORY ──────────────────────────────────────────────────────────
  inventory: router({
    list: publicProcedure.query(() => listInventory()),
    create: publicProcedure.input(import_zod2.z.object({
      itemName: import_zod2.z.string().min(1),
      category: import_zod2.z.enum(["food", "treats", "supplements", "supplies", "meds"]).optional(),
      quantity: import_zod2.z.string().optional(),
      unit: import_zod2.z.string().optional(),
      lowStockThreshold: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => createInventoryItem(input)),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      itemName: import_zod2.z.string().optional(),
      category: import_zod2.z.enum(["food", "treats", "supplements", "supplies", "meds"]).optional(),
      quantity: import_zod2.z.string().optional(),
      unit: import_zod2.z.string().optional(),
      lowStockThreshold: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      return updateInventoryItem(id, data);
    })
  }),
  // ─── BRIDGING SESSIONS ─────────────────────────────────────────────────
  bridging: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => listBridgingSessions(input.dogId)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getBridgingSession(input.id)),
    initialize: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number(), clientId: import_zod2.z.number() })).mutation(({ input }) => initializeBridgingSessions(input.dogId, input.clientId)),
    create: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      clientId: import_zod2.z.number().optional(),
      type: import_zod2.z.enum(["classroom", "go_home", "custom"]),
      title: import_zod2.z.string().min(1),
      description: import_zod2.z.string().optional(),
      scheduledAt: import_zod2.z.string().optional(),
      sortOrder: import_zod2.z.number().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      return createBridgingSession({
        ...input,
        scheduledAt: input.scheduledAt ? new Date(input.scheduledAt) : void 0
      });
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      title: import_zod2.z.string().optional(),
      description: import_zod2.z.string().optional(),
      scheduledAt: import_zod2.z.string().optional(),
      status: import_zod2.z.enum(["pending", "scheduled", "completed", "cancelled"]).optional(),
      sortOrder: import_zod2.z.number().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, scheduledAt, ...rest } = input;
      const data = { ...rest };
      if (scheduledAt) data.scheduledAt = new Date(scheduledAt);
      return updateBridgingSession(id, data);
    }),
    complete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => completeBridgingSession(input.id))
  }),
  // ─── EBOOK ACCESS ──────────────────────────────────────────────────────
  ebooks: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => listEbookAccess(input.dogId))
  }),
  // ─── MESSAGES ──────────────────────────────────────────────────────────
  messages: router({
    list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => listMessages(input.clientId)),
    unread: publicProcedure.query(() => listUnreadMessages()),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      senderType: import_zod2.z.enum(["client", "staff"]),
      senderId: import_zod2.z.number().optional(),
      body: import_zod2.z.string().min(1)
    })).mutation(({ input }) => createMessage({
      clientId: input.clientId,
      senderType: input.senderType,
      senderUserId: input.senderId,
      content: input.body
    })),
    markRead: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number(), senderType: import_zod2.z.enum(["client", "staff"]) })).mutation(({ input }) => markMessagesRead(input.clientId, input.senderType))
  }),
  // ─── PUSH TOKENS ───────────────────────────────────────────────────────
  pushTokens: router({
    register: publicProcedure.input(import_zod2.z.object({
      userId: import_zod2.z.number(),
      token: import_zod2.z.string(),
      platform: import_zod2.z.enum(["ios", "android", "web"])
    })).mutation(({ input }) => registerPushToken(input.userId, input.token, input.platform))
  }),
  // ─── NOTIFICATIONS ─────────────────────────────────────────────────────
  notifications: router({
    list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listNotificationSchedules(input?.clientId)),
    pending: publicProcedure.query(() => listPendingNotifications()),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      type: import_zod2.z.enum(["payment_reminder", "bridging_reminder", "health_record_reminder", "general"]),
      referenceType: import_zod2.z.enum(["invoice", "bridging_session", "appointment", "health_record"]).optional(),
      referenceId: import_zod2.z.number().optional(),
      title: import_zod2.z.string(),
      body: import_zod2.z.string(),
      scheduledFor: import_zod2.z.string()
    })).mutation(({ input }) => createNotificationSchedule({
      ...input,
      scheduledFor: new Date(input.scheduledFor)
    })),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      status: import_zod2.z.enum(["pending", "sent", "failed", "cancelled"]).optional(),
      sentAt: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, sentAt, ...rest } = input;
      const data = { ...rest };
      if (sentAt) data.sentAt = new Date(sentAt);
      return updateNotificationSchedule(id, data);
    })
  }),
  // ─── HEALTH RECORDS ────────────────────────────────────────────────────
  healthRecords: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number().optional(), clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => {
      if (input?.dogId) return listHealthRecords(input.dogId);
      if (input?.clientId) return listHealthRecordsByClient(input.clientId);
      return listPendingHealthRecords();
    }),
    pending: publicProcedure.query(() => listPendingHealthRecords()),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getHealthRecord(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      clientId: import_zod2.z.number(),
      type: import_zod2.z.enum(["vaccine", "fecal", "vet_exam", "other"]),
      title: import_zod2.z.string(),
      description: import_zod2.z.string().optional(),
      documentUrl: import_zod2.z.string().optional(),
      recordDate: import_zod2.z.string().optional(),
      expiresAt: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { recordDate, expiresAt, ...rest } = input;
      return createHealthRecord({
        ...rest,
        status: "submitted",
        recordDate: recordDate ? new Date(recordDate) : void 0,
        expiresAt: expiresAt ? new Date(expiresAt) : void 0
      });
    }),
    review: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      status: import_zod2.z.enum(["approved", "rejected"]),
      reviewNotes: import_zod2.z.string().optional(),
      reviewedBy: import_zod2.z.number().optional()
    })).mutation(async ({ input }) => {
      const { id, ...data } = input;
      return updateHealthRecord(id, { ...data, reviewedAt: /* @__PURE__ */ new Date() });
    })
  }),
  // ─── INTAKE REQUIREMENTS ───────────────────────────────────────────────
  intakeRequirements: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number().optional(), clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listIntakeRequirements(input?.dogId, input?.clientId)),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getIntakeRequirement(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      clientId: import_zod2.z.number(),
      intakeDate: import_zod2.z.string(),
      requireVaccines: import_zod2.z.boolean().optional(),
      requireFecal: import_zod2.z.boolean().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const result = await createIntakeRequirement({
        ...input,
        intakeDate: new Date(input.intakeDate)
      });
      const dog = await getDog(input.dogId);
      const dogName = dog?.name ?? "Your dog";
      await scheduleHealthRecordReminders(result.id, input.clientId, input.intakeDate, dogName);
      return result;
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      vaccineStatus: import_zod2.z.enum(["pending", "submitted", "approved", "rejected"]).optional(),
      fecalStatus: import_zod2.z.enum(["pending", "submitted", "approved", "rejected"]).optional(),
      allCleared: import_zod2.z.boolean().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      return updateIntakeRequirement(id, data);
    })
  }),
  // ─── CLIENT PORTAL ─────────────────────────────────────────────────────
  clientPortal: router({
    data: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => getClientPortalData(input.clientId))
  }),
  // ─── SQUARE PAYMENTS ───────────────────────────────────────────────────
  square: router({
    createPaymentLink: publicProcedure.input(import_zod2.z.object({
      invoiceId: import_zod2.z.number(),
      redirectUrl: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const invoice = await getInvoice(input.invoiceId);
      if (!invoice) throw new Error("Invoice not found");
      const client = await getClient(invoice.clientId);
      const clientName = client ? `${client.firstName} ${client.lastName}` : "Client";
      const amount = parseFloat(String(invoice.amount));
      const result = await createPaymentLink({
        invoiceId: invoice.id,
        amount,
        description: invoice.description || `Savage K9 Invoice #${invoice.id}`,
        clientName,
        redirectUrl: input.redirectUrl
      });
      await updateInvoice(invoice.id, {
        squarePaymentLinkId: result.paymentLinkId,
        squarePaymentLinkUrl: result.paymentLinkUrl,
        squareOrderId: result.orderId,
        status: "sent"
      });
      return result;
    }),
    checkPaymentStatus: publicProcedure.input(import_zod2.z.object({ invoiceId: import_zod2.z.number() })).query(async ({ input }) => {
      const invoice = await getInvoice(input.invoiceId);
      if (!invoice || !invoice.squareOrderId) {
        return { status: invoice?.status ?? "unknown", paid: false };
      }
      try {
        const order = await getOrder(invoice.squareOrderId);
        if (order.state === "COMPLETED" && invoice.status !== "paid") {
          await updateInvoice(invoice.id, {
            status: "paid",
            paidAt: /* @__PURE__ */ new Date()
          });
          return { status: "paid", paid: true, order };
        }
        return { status: invoice.status, paid: invoice.status === "paid", order };
      } catch {
        return { status: invoice.status, paid: invoice.status === "paid" };
      }
    }),
    recentPayments: publicProcedure.input(import_zod2.z.object({ limit: import_zod2.z.number().optional() }).optional()).query(({ input }) => listPayments({ limit: input?.limit ?? 20 }))
  }),
  // ─── AI TRAINING NOTES ─────────────────────────────────────────────────
  ai: router({
    generateTrainingSummary: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      sessionIds: import_zod2.z.array(import_zod2.z.number()).optional()
    })).mutation(async ({ input }) => {
      const dog = await getDog(input.dogId);
      if (!dog) throw new Error("Dog not found");
      const logs = await listTrainingLogs(input.dogId);
      if (!logs || logs.length === 0) throw new Error("No training logs found");
      const targetLogs = input.sessionIds ? logs.filter((l) => input.sessionIds.includes(l.id)) : logs;
      const logsText = targetLogs.map(
        (l, i) => `Session ${i + 1} (${l.sessionDate}):
  Obedience Score: ${l.obedienceScore ?? "N/A"}/10
  Behavior Score: ${l.behaviorScore ?? "N/A"}/10
  Notes: ${l.notes ?? "None"}`
      ).join("\n\n");
      const response = await invokeLLM({
        messages: [
          {
            role: "system",
            content: `You are a professional dog trainer writing a client-friendly training progress report for Savage K9, a premium dog training facility in Mesa, AZ. Write in a warm but professional tone. Use the brand voice: confident, knowledgeable, and encouraging. Structure the report with:
1. Overall Progress Summary (2-3 sentences)
2. Key Achievements (bullet points)
3. Areas for Improvement (bullet points)
4. Recommendations for Home Practice
5. Next Steps

Keep it concise but informative. The client should feel confident about their dog's progress.`
          },
          {
            role: "user",
            content: `Generate a training progress report for ${dog.name} (${dog.breed || "mixed breed"}).

Training Sessions:
${logsText}`
          }
        ]
      });
      const summary = response.choices[0]?.message?.content ?? "Unable to generate summary.";
      return { summary, dogName: dog.name, sessionCount: targetLogs.length };
    }),
    generateSessionNote: publicProcedure.input(import_zod2.z.object({
      dogName: import_zod2.z.string(),
      breed: import_zod2.z.string().optional(),
      obedienceScore: import_zod2.z.number().optional(),
      behaviorScore: import_zod2.z.number().optional(),
      rawNotes: import_zod2.z.string()
    })).mutation(async ({ input }) => {
      const response = await invokeLLM({
        messages: [
          {
            role: "system",
            content: `You are a professional dog trainer at Savage K9 writing a concise session note. Transform the trainer's raw notes into a polished, client-readable session summary. Keep it to 3-5 sentences. Include the scores naturally in the narrative. Be specific about behaviors observed and progress made.`
          },
          {
            role: "user",
            content: `Dog: ${input.dogName} (${input.breed || "mixed breed"})
Obedience: ${input.obedienceScore ?? "N/A"}/10
Behavior: ${input.behaviorScore ?? "N/A"}/10
Raw notes: ${input.rawNotes}`
          }
        ]
      });
      const note = response.choices[0]?.message?.content ?? input.rawNotes;
      return { note };
    })
  }),
  // ─── TWILIO SMS ────────────────────────────────────────────────────────
  sms: router({
    send: publicProcedure.input(import_zod2.z.object({
      to: import_zod2.z.string().min(1),
      body: import_zod2.z.string().min(1)
    })).mutation(({ input }) => sendSMS(input)),
    sendAppointmentReminder: publicProcedure.input(import_zod2.z.object({
      clientPhone: import_zod2.z.string(),
      clientName: import_zod2.z.string(),
      dogName: import_zod2.z.string(),
      appointmentType: import_zod2.z.string(),
      dateTime: import_zod2.z.string(),
      hoursUntil: import_zod2.z.number()
    })).mutation(({ input }) => sendAppointmentReminder(input)),
    sendBridgingReminder: publicProcedure.input(import_zod2.z.object({
      clientPhone: import_zod2.z.string(),
      clientName: import_zod2.z.string(),
      dogName: import_zod2.z.string(),
      sessionTitle: import_zod2.z.string(),
      dateTime: import_zod2.z.string(),
      hoursUntil: import_zod2.z.number()
    })).mutation(({ input }) => sendBridgingReminder(input)),
    sendPaymentReminder: publicProcedure.input(import_zod2.z.object({
      clientPhone: import_zod2.z.string(),
      clientName: import_zod2.z.string(),
      invoiceId: import_zod2.z.number(),
      amount: import_zod2.z.number(),
      dueDate: import_zod2.z.string(),
      isOverdue: import_zod2.z.boolean(),
      paymentUrl: import_zod2.z.string().optional()
    })).mutation(({ input }) => sendPaymentReminder(input)),
    sendHealthRecordReminder: publicProcedure.input(import_zod2.z.object({
      clientPhone: import_zod2.z.string(),
      clientName: import_zod2.z.string(),
      dogName: import_zod2.z.string(),
      intakeDate: import_zod2.z.string(),
      daysUntilIntake: import_zod2.z.number()
    })).mutation(({ input }) => sendHealthRecordReminder(input)),
    recentMessages: publicProcedure.input(import_zod2.z.object({ limit: import_zod2.z.number().optional() }).optional()).query(({ input }) => listRecentMessages(input?.limit ?? 20))
  }),
  // ─── TIME ENTRIES ───────────────────────────────────────────────────────
  // SECURITY: Employees can only clock in/out themselves. Admins/owners/managers can manage all.
  timeEntries: router({
    list: staffSelfProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number().optional() }).optional()).query(({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin) {
        return listTimeEntries(ctx.selfStaffId ?? void 0);
      }
      return listTimeEntries(input?.staffId);
    }),
    create: staffSelfProcedure.input(import_zod2.z.object({
      staffId: import_zod2.z.number(),
      clockIn: import_zod2.z.string(),
      clockOut: import_zod2.z.string().optional(),
      totalHours: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin && input.staffId !== ctx.selfStaffId) {
        throw new import_server3.TRPCError({ code: "FORBIDDEN", message: "You can only clock in/out yourself." });
      }
      const clockIn = new Date(input.clockIn);
      const clockOut = input.clockOut ? new Date(input.clockOut) : void 0;
      let totalHours = input.totalHours;
      if (clockIn && clockOut && !totalHours) {
        totalHours = ((clockOut.getTime() - clockIn.getTime()) / 36e5).toFixed(2);
      }
      return createTimeEntry({
        ...input,
        clockIn,
        clockOut,
        totalHours
      });
    }),
    update: staffSelfProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      clockOut: import_zod2.z.string().optional(),
      totalHours: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(async ({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin) {
        const entry = await getTimeEntry(input.id);
        if (!entry || entry.staffId !== ctx.selfStaffId) {
          throw new import_server3.TRPCError({ code: "FORBIDDEN", message: "You can only edit your own time entries." });
        }
      }
      const { id, clockOut, ...rest } = input;
      const data = { ...rest };
      if (clockOut) data.clockOut = new Date(clockOut);
      return updateTimeEntry(id, data);
    }),
    delete: staffAdminProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteTimeEntry(input.id)),
    fullUpdate: staffAdminProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      clockIn: import_zod2.z.string().optional(),
      clockOut: import_zod2.z.string().nullable().optional(),
      notes: import_zod2.z.string().nullable().optional()
    })).mutation(({ input }) => {
      const { id, clockIn, clockOut, notes } = input;
      return fullUpdateTimeEntry(id, {
        clockIn: clockIn ? new Date(clockIn) : void 0,
        clockOut: clockOut === null ? null : clockOut ? new Date(clockOut) : void 0,
        notes
      });
    }),
    activeClockedIn: staffSelfProcedure.query(({ ctx }) => {
      if (!ctx.isOwnerOrAdmin) {
        return getActiveClockedInForStaff(ctx.selfStaffId);
      }
      return getActiveClockedIn();
    }),
    weeklyPayroll: staffAdminProcedure.input(import_zod2.z.object({ weekStart: import_zod2.z.string() })).query(({ input }) => getWeeklyPayrollSummary(input.weekStart)),
    biweeklyPayroll: staffAdminProcedure.input(import_zod2.z.object({ periodStart: import_zod2.z.string(), periodEnd: import_zod2.z.string() })).query(({ input }) => getBiweeklyPayrollSummary(input.periodStart, input.periodEnd)),
    weekEntries: staffSelfProcedure.input(import_zod2.z.object({ weekStart: import_zod2.z.string(), staffId: import_zod2.z.number().optional() })).query(({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin) {
        return listTimeEntriesForWeek(input.weekStart, ctx.selfStaffId ?? void 0);
      }
      return listTimeEntriesForWeek(input.weekStart, input.staffId);
    }),
    periodEntries: staffSelfProcedure.input(import_zod2.z.object({ periodStart: import_zod2.z.string(), periodEnd: import_zod2.z.string(), staffId: import_zod2.z.number().optional() })).query(({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin) {
        return listTimeEntriesForPeriod(input.periodStart, input.periodEnd, ctx.selfStaffId ?? void 0);
      }
      return listTimeEntriesForPeriod(input.periodStart, input.periodEnd, input.staffId);
    }),
    staffHistory: staffSelfProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number(), limit: import_zod2.z.number().optional(), offset: import_zod2.z.number().optional() })).query(({ input, ctx }) => {
      if (!ctx.isOwnerOrAdmin && input.staffId !== ctx.selfStaffId) {
        throw new import_server3.TRPCError({ code: "FORBIDDEN", message: "You can only view your own time history." });
      }
      return getStaffTimeHistory(input.staffId, input.limit, input.offset);
    }),
    shiftEndNotify: staffSelfProcedure.input(import_zod2.z.object({
      staffName: import_zod2.z.string(),
      shiftNotes: import_zod2.z.string().optional(),
      lowStockItems: import_zod2.z.string().optional(),
      facilityPct: import_zod2.z.number().optional()
    })).mutation(async ({ input }) => {
      const parts = [];
      parts.push(`Staff: ${input.staffName}`);
      if (input.facilityPct !== void 0) {
        parts.push(`Facility Tasks: ${input.facilityPct}% complete`);
      }
      if (input.shiftNotes) {
        parts.push(`
Shift Notes:
${input.shiftNotes}`);
      }
      if (input.lowStockItems) {
        parts.push(`
\u26A0\uFE0F Low Inventory Alert:
${input.lowStockItems}`);
      }
      const content = parts.join("\n");
      const title = input.lowStockItems ? `\u26A0\uFE0F Shift End: ${input.staffName} \u2014 Low Inventory Alert` : `Shift End: ${input.staffName}`;
      try {
        await notifyOwner({ title, content });
      } catch (e) {
        console.warn("[ShiftNotify] Failed to send notification:", e);
      }
      return { sent: true };
    }),
    shiftHandoff: protectedProcedure.query(() => getShiftHandoffData()),
    payrollPaidStatus: staffAdminProcedure.input(import_zod2.z.object({ periodStart: import_zod2.z.string(), periodEnd: import_zod2.z.string() })).query(({ input }) => getPayrollPaidStatus(input.periodStart, input.periodEnd)),
    markPaid: staffAdminProcedure.input(import_zod2.z.object({
      staffId: import_zod2.z.number(),
      periodStart: import_zod2.z.string(),
      periodEnd: import_zod2.z.string(),
      paid: import_zod2.z.boolean(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input, ctx }) => setPayrollPaid(input.staffId, input.periodStart, input.periodEnd, input.paid, ctx.user?.id, input.notes)),
    sendDailySummary: staffAdminProcedure.input(import_zod2.z.object({
      recipientEmails: import_zod2.z.array(import_zod2.z.string()).optional()
    }).optional()).mutation(async ({ input }) => {
      const { sendDailySummary: sendDailySummary2 } = await Promise.resolve().then(() => (init_daily_summary_scheduler(), daily_summary_scheduler_exports));
      const result = await sendDailySummary2(input?.recipientEmails);
      return result;
    })
  }),
  // ─── STAFF MANAGEMENT ──────────────────────────────────────────────────
  // SECURITY: Staff list, profiles, pay rates, and permissions are admin-only.
  // Only staff.me is accessible to all authenticated users (returns own record).
  staff: router({
    list: staffAdminProcedure.query(() => listStaffMembers()),
    get: staffAdminProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getStaffMember(input.id)),
    /** Get the current logged-in user's linked staff record */
    me: publicProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return null;
      let staff = await getStaffMemberByUserId(ctx.user.id);
      if (staff) {
        const { DEFAULT_PERMISSIONS: DP } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const roleDefaults = DP[staff.role] ?? DP.trainer;
        const storedPerms = staff.permissions;
        const merged = storedPerms ? { ...roleDefaults, ...storedPerms } : roleDefaults;
        return { ...staff, permissions: merged };
      }
      const isOwner = ctx.user.openId === (process.env.OWNER_OPEN_ID ?? "");
      if (isOwner) {
        const record = await ensureOwnerStaffRecord(ctx.user.id, ctx.user.name ?? "Owner", ctx.user.email ?? null);
        return record;
      }
      if (ctx.user.email) {
        const byEmail = await getStaffMemberByEmail(ctx.user.email);
        if (byEmail && !byEmail.userId) {
          await updateStaffMember(byEmail.id, { userId: ctx.user.id });
          return { ...byEmail, userId: ctx.user.id };
        }
      }
      return null;
    }),
    /** Get staff member by userId (for admin lookups) */
    byUser: staffAdminProcedure.input(import_zod2.z.object({ userId: import_zod2.z.number() })).query(({ input }) => getStaffMemberByUserId(input.userId)),
    create: staffAdminProcedure.input(import_zod2.z.object({
      userId: import_zod2.z.number().optional(),
      firstName: import_zod2.z.string().min(1),
      lastName: import_zod2.z.string().min(1),
      email: import_zod2.z.string().optional(),
      phone: import_zod2.z.string().optional(),
      role: import_zod2.z.enum(["owner", "admin", "manager", "trainer", "kennel_tech", "front_desk"]),
      specialties: import_zod2.z.array(import_zod2.z.string()).optional(),
      isActive: import_zod2.z.boolean().optional(),
      payType: import_zod2.z.enum(["hourly", "salary", "commission"]).optional(),
      hourlyRate: import_zod2.z.string().optional(),
      salary: import_zod2.z.string().optional(),
      commissionRate: import_zod2.z.string().optional(),
      permissions: import_zod2.z.record(import_zod2.z.string(), import_zod2.z.boolean()).optional()
    })).mutation(({ input }) => createStaffMember(input)),
    update: staffAdminProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      firstName: import_zod2.z.string().optional(),
      lastName: import_zod2.z.string().optional(),
      email: import_zod2.z.string().optional(),
      phone: import_zod2.z.string().optional(),
      role: import_zod2.z.enum(["owner", "admin", "manager", "trainer", "kennel_tech", "front_desk"]).optional(),
      specialties: import_zod2.z.array(import_zod2.z.string()).optional(),
      isActive: import_zod2.z.boolean().optional(),
      payType: import_zod2.z.enum(["hourly", "salary", "commission"]).optional(),
      hourlyRate: import_zod2.z.string().optional(),
      salary: import_zod2.z.string().optional(),
      commissionRate: import_zod2.z.string().optional(),
      permissions: import_zod2.z.record(import_zod2.z.string(), import_zod2.z.boolean()).optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      return updateStaffMember(id, data);
    }),
    updatePay: staffAdminProcedure.input(import_zod2.z.object({
      staffId: import_zod2.z.number(),
      payType: import_zod2.z.enum(["hourly", "salary", "commission"]),
      hourlyRate: import_zod2.z.string().optional(),
      salary: import_zod2.z.string().optional(),
      commissionRate: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => updateStaffPay(input)),
    payHistory: staffAdminProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number() })).query(({ input }) => getStaffPayHistory(input.staffId)),
    updatePermissions: staffAdminProcedure.input(import_zod2.z.object({
      staffId: import_zod2.z.number(),
      permissions: import_zod2.z.record(import_zod2.z.string(), import_zod2.z.boolean())
    })).mutation(({ input }) => updateStaffPermissions(input.staffId, input.permissions)),
    deactivate: staffAdminProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => updateStaffMember(input.id, { isActive: false })),
    reactivate: staffAdminProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => updateStaffMember(input.id, { isActive: true })),
    assignments: router({
      list: staffAdminProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number().optional(), dogId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listStaffDogAssignments(input?.staffId, input?.dogId)),
      assign: staffAdminProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number(), dogId: import_zod2.z.number(), role: import_zod2.z.enum(["primary_trainer", "backup_trainer", "kennel_tech"]).optional() })).mutation(({ input }) => assignDogToStaff(input)),
      unassign: staffAdminProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number(), dogId: import_zod2.z.number() })).mutation(({ input }) => unassignDogFromStaff(input.staffId, input.dogId))
    }),
    invitations: router({
      /** List all invitations, optionally filtered by staffId */
      list: staffAdminProcedure.input(import_zod2.z.object({ staffId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listStaffInvitations(input?.staffId)),
      /** Get a single invitation by its token */
      getByToken: publicProcedure.input(import_zod2.z.object({ token: import_zod2.z.string() })).query(({ input }) => getStaffInvitationByToken(input.token)),
      /** Send an invitation to a staff member */
      send: staffAdminProcedure.input(import_zod2.z.object({
        staffId: import_zod2.z.number(),
        email: import_zod2.z.string().min(1),
        sendSms: import_zod2.z.boolean().optional(),
        phone: import_zod2.z.string().optional()
      })).mutation(async ({ input }) => {
        const crypto = await import("crypto");
        const token = crypto.randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
        const inv = await createStaffInvitation({
          staffId: input.staffId,
          email: input.email,
          token,
          expiresAt
        });
        await updateStaffMember(input.staffId, {
          inviteStatus: "pending",
          inviteEmail: input.email,
          invitedAt: /* @__PURE__ */ new Date()
        });
        const baseUrl = process.env.EXPO_WEB_PREVIEW_URL || process.env.EXPO_PACKAGER_PROXY_URL || "http://localhost:8081";
        const inviteLink = `${baseUrl}/invite/accept?token=${token}`;
        let smsSent = false;
        let smsError;
        if (input.sendSms && input.phone) {
          try {
            const staff = await getStaffMember(input.staffId);
            const staffName = staff ? `${staff.firstName} ${staff.lastName}` : "Team Member";
            const smsResult = await sendSMS({
              to: input.phone,
              body: `Hi ${staffName}! You've been invited to join the Savage K9 team. Open this link to set up your account: ${inviteLink}`
            });
            smsSent = smsResult.success;
            if (!smsResult.success) {
              smsError = smsResult.error || "SMS delivery failed";
              console.error("[Staff Invite] SMS send failed:", smsError);
            }
          } catch (e) {
            smsError = e?.message || "SMS send error";
            console.error("[Staff Invite] SMS send failed:", e);
          }
        }
        return { id: inv.id, token, inviteLink, expiresAt, smsSent, smsError };
      }),
      /** Accept an invitation (called after OAuth login) */
      accept: publicProcedure.input(import_zod2.z.object({ token: import_zod2.z.string() })).mutation(async ({ ctx, input }) => {
        if (!ctx.user) throw new Error("Must be logged in to accept invitation");
        const invitation = await getStaffInvitationByToken(input.token);
        if (!invitation) throw new Error("Invalid invitation token");
        if (invitation.status !== "pending") throw new Error(`Invitation has already been ${invitation.status}`);
        if (/* @__PURE__ */ new Date() > invitation.expiresAt) {
          await updateStaffInvitation(invitation.id, { status: "expired" });
          throw new Error("Invitation has expired");
        }
        const result = await acceptStaffInvitation(invitation.id, ctx.user.id);
        return result;
      }),
      /** Revoke a pending invitation */
      revoke: staffAdminProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => revokeStaffInvitation(input.id)),
      /** Resend an invitation (creates new token, invalidates old) */
      resend: staffAdminProcedure.input(import_zod2.z.object({
        id: import_zod2.z.number(),
        sendSms: import_zod2.z.boolean().optional(),
        phone: import_zod2.z.string().optional()
      })).mutation(async ({ input }) => {
        await revokeStaffInvitation(input.id);
        const oldInv = (await listStaffInvitations()).find((i) => i.id === input.id);
        if (!oldInv) throw new Error("Invitation not found");
        const crypto = await import("crypto");
        const token = crypto.randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
        const newInv = await createStaffInvitation({
          staffId: oldInv.staffId,
          email: oldInv.email,
          token,
          expiresAt
        });
        const baseUrl = process.env.EXPO_WEB_PREVIEW_URL || process.env.EXPO_PACKAGER_PROXY_URL || "http://localhost:8081";
        const inviteLink = `${baseUrl}/invite/accept?token=${token}`;
        let smsSent = false;
        let smsError;
        if (input.sendSms && input.phone) {
          try {
            const staff = await getStaffMember(oldInv.staffId);
            const staffName = staff ? `${staff.firstName} ${staff.lastName}` : "Team Member";
            const smsResult = await sendSMS({
              to: input.phone,
              body: `Hi ${staffName}! Here's your updated invitation to join the Savage K9 team: ${inviteLink}`
            });
            smsSent = smsResult.success;
            if (!smsResult.success) {
              smsError = smsResult.error || "SMS delivery failed";
              console.error("[Staff Invite] SMS resend failed:", smsError);
            }
          } catch (e) {
            smsError = e?.message || "SMS send error";
            console.error("[Staff Invite] SMS resend failed:", e);
          }
        }
        return { id: newInv.id, token, inviteLink, expiresAt, smsSent, smsError };
      })
    })
  }),
  // ─── TRAINING MEDIA ────────────────────────────────────────────────────
  trainingMedia: router({
    list: publicProcedure.input(import_zod2.z.object({ trainingLogId: import_zod2.z.number() })).query(({ input }) => listTrainingMedia(input.trainingLogId)),
    byDog: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => listTrainingMediaByDog(input.dogId)),
    upload: publicProcedure.input(import_zod2.z.object({
      trainingLogId: import_zod2.z.number(),
      dogId: import_zod2.z.number(),
      base64: import_zod2.z.string(),
      mimeType: import_zod2.z.string(),
      caption: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const isVideo = input.mimeType.startsWith("video/");
      const ext = isVideo ? "mp4" : input.mimeType.includes("png") ? "png" : "jpg";
      const fileType = isVideo ? "video" : "photo";
      const buffer = Buffer.from(input.base64, "base64");
      const key = `training-media/${input.dogId}/${input.trainingLogId}-${Date.now()}.${ext}`;
      const { url } = await storagePut(key, buffer, input.mimeType);
      return createTrainingMedia({
        trainingLogId: input.trainingLogId,
        dogId: input.dogId,
        fileType,
        fileUrl: url,
        thumbnailUrl: isVideo ? void 0 : url,
        caption: input.caption
      });
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteTrainingMedia(input.id))
  }),
  // ─── CLIENT ONBOARDING ─────────────────────────────────────────────────
  onboarding: router({
    get: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => getClientOnboarding(input.clientId)),
    start: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      dogId: import_zod2.z.number().optional()
    })).mutation(async ({ input }) => {
      return createClientOnboarding({
        clientId: input.clientId,
        dogId: input.dogId,
        status: "in_progress"
      });
    }),
    updateStep: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      step1InfoConfirmed: import_zod2.z.boolean().optional(),
      step2ContractSigned: import_zod2.z.boolean().optional(),
      step3HealthSubmitted: import_zod2.z.boolean().optional(),
      step4BridgingScheduled: import_zod2.z.boolean().optional(),
      step5Complete: import_zod2.z.boolean().optional(),
      contractId: import_zod2.z.number().optional(),
      intakeRequirementId: import_zod2.z.number().optional(),
      bridgingSessionId: import_zod2.z.number().optional(),
      status: import_zod2.z.enum(["not_started", "in_progress", "completed"]).optional()
    })).mutation(({ input }) => {
      const { clientId, ...data } = input;
      const updateData = { ...data };
      if (data.status === "completed") updateData.completedAt = /* @__PURE__ */ new Date();
      return updateClientOnboarding(clientId, updateData);
    })
  }),
  // ─── DOG FEEDING INFO ──────────────────────────────────────────────────
  feeding: router({
    get: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => getDogFeedingInfo(input.dogId)),
    upsert: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      foodBrand: import_zod2.z.string().optional(),
      foodType: import_zod2.z.string().optional(),
      amountPerMeal: import_zod2.z.string().optional(),
      mealsPerDay: import_zod2.z.number().optional(),
      feedingSchedule: import_zod2.z.string().optional(),
      allergies: import_zod2.z.string().optional(),
      specialInstructions: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { dogId, ...data } = input;
      return upsertDogFeedingInfo(dogId, data);
    })
  }),
  // ─── DOG MEDICATIONS ──────────────────────────────────────────────────
  medications: router({
    list: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number() })).query(({ input }) => listDogMedications(input.dogId)),
    create: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      name: import_zod2.z.string().min(1),
      dosage: import_zod2.z.string().optional(),
      frequency: import_zod2.z.string().optional(),
      startDate: import_zod2.z.string().optional(),
      endDate: import_zod2.z.string().optional(),
      prescribedBy: import_zod2.z.string().optional(),
      isActive: import_zod2.z.boolean().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { startDate, endDate, ...rest } = input;
      return createDogMedication({
        ...rest,
        startDate: startDate ? startDate : void 0,
        endDate: endDate ? endDate : void 0
      });
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      name: import_zod2.z.string().optional(),
      dosage: import_zod2.z.string().optional(),
      frequency: import_zod2.z.string().optional(),
      startDate: import_zod2.z.string().optional(),
      endDate: import_zod2.z.string().optional(),
      prescribedBy: import_zod2.z.string().optional(),
      isActive: import_zod2.z.boolean().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, startDate, endDate, ...rest } = input;
      return updateDogMedication(id, {
        ...rest,
        startDate: startDate ? startDate : void 0,
        endDate: endDate ? endDate : void 0
      });
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteDogMedication(input.id))
  }),
  // ─── LEAD FOLLOW-UP SEQUENCES ──────────────────────────────────────────
  followupSequences: router({
    list: publicProcedure.query(() => listFollowupSequences()),
    get: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).query(({ input }) => getFollowupSequence(input.id)),
    create: publicProcedure.input(import_zod2.z.object({
      name: import_zod2.z.string(),
      description: import_zod2.z.string().optional(),
      isActive: import_zod2.z.boolean().optional(),
      triggerSource: import_zod2.z.enum(["meta", "wix", "referral", "website", "other", "all"]).optional()
    })).mutation(({ input }) => createFollowupSequence(input)),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      name: import_zod2.z.string().optional(),
      description: import_zod2.z.string().optional(),
      isActive: import_zod2.z.boolean().optional(),
      triggerSource: import_zod2.z.enum(["meta", "wix", "referral", "website", "other", "all"]).optional()
    })).mutation(({ input }) => {
      const { id, ...rest } = input;
      return updateFollowupSequence(id, rest);
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteFollowupSequence(input.id))
  }),
  // ─── LEAD FOLLOW-UP STEPS ────────────────────────────────────────────────
  followupSteps: router({
    list: publicProcedure.input(import_zod2.z.object({ sequenceId: import_zod2.z.number() })).query(({ input }) => listFollowupSteps(input.sequenceId)),
    create: publicProcedure.input(import_zod2.z.object({
      sequenceId: import_zod2.z.number(),
      stepOrder: import_zod2.z.number(),
      delayMinutes: import_zod2.z.number(),
      messageTemplate: import_zod2.z.string(),
      channel: import_zod2.z.enum(["sms", "email"]).optional()
    })).mutation(({ input }) => createFollowupStep(input)),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      stepOrder: import_zod2.z.number().optional(),
      delayMinutes: import_zod2.z.number().optional(),
      messageTemplate: import_zod2.z.string().optional(),
      channel: import_zod2.z.enum(["sms", "email"]).optional()
    })).mutation(({ input }) => {
      const { id, ...rest } = input;
      return updateFollowupStep(id, rest);
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteFollowupStep(input.id))
  }),
  // ─── LEAD FOLLOW-UP LOGS ─────────────────────────────────────────────────
  followupLogs: router({
    list: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number().optional(),
      sequenceId: import_zod2.z.number().optional(),
      status: import_zod2.z.string().optional()
    }).optional()).query(({ input }) => listFollowupLogs(input ?? void 0)),
    cancel: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).mutation(({ input }) => cancelFollowupLogsForClient(input.clientId))
  }),
  // ─── SQUARE IMPORT ──────────────────────────────────────────────────────
  squareImport: router({
    fetchCustomers: publicProcedure.query(async () => {
      const customers = await fetchAllSquareCustomers();
      const previews = [];
      for (const c of customers) {
        const email = c.email_address ?? null;
        const phone = c.phone_number ?? null;
        const existing = await findClientByEmailOrPhone(email, phone);
        previews.push({
          squareId: c.id,
          firstName: c.given_name ?? "",
          lastName: c.family_name ?? "",
          email,
          phone,
          notes: c.note ?? null,
          createdAt: c.created_at,
          isDuplicate: !!existing,
          existingClientId: existing?.id ?? null
        });
      }
      return previews;
    }),
    fetchInvoices: publicProcedure.query(async () => {
      const invoices2 = await fetchAllSquareInvoices();
      const previews = [];
      for (const inv of invoices2) {
        const existing = await findInvoiceBySquareId(inv.id);
        const payReq = inv.payment_requests?.[0];
        const amountCents = payReq?.computed_amount_money?.amount ?? 0;
        const recipientName = inv.primary_recipient ? `${inv.primary_recipient.given_name ?? ""} ${inv.primary_recipient.family_name ?? ""}`.trim() : null;
        previews.push({
          squareId: inv.id,
          invoiceNumber: inv.invoice_number ?? null,
          title: inv.title ?? inv.description ?? null,
          amount: amountCents / 100,
          status: inv.status,
          dueDate: payReq?.due_date ?? null,
          customerName: recipientName,
          squareCustomerId: inv.primary_recipient?.customer_id ?? null,
          createdAt: inv.created_at,
          isDuplicate: !!existing
        });
      }
      return previews;
    }),
    importCustomers: publicProcedure.input(import_zod2.z.object({
      squareIds: import_zod2.z.array(import_zod2.z.string()),
      importTransactions: import_zod2.z.boolean().optional()
    })).mutation(async ({ input }) => {
      const allCustomers = await fetchAllSquareCustomers();
      const selected = allCustomers.filter((c) => input.squareIds.includes(c.id));
      let imported = 0;
      let skipped = 0;
      let transactionsImported = 0;
      let transactionsSkipped = 0;
      const errors = [];
      for (const c of selected) {
        try {
          const email = c.email_address ?? null;
          const phone = c.phone_number ?? null;
          let existing = await findClientByEmailOrPhone(email, phone);
          let clientId;
          if (existing) {
            clientId = existing.id;
            skipped++;
          } else {
            const result = await importClient({
              firstName: c.given_name ?? "Unknown",
              lastName: c.family_name ?? "",
              email: email ?? void 0,
              phone: phone ?? void 0,
              leadStatus: "active",
              leadSource: "other",
              notes: c.note ?? `Imported from Square (ID: ${c.id})`,
              tags: ["square-import"]
            });
            clientId = result.id;
            imported++;
          }
          if (input.importTransactions !== false) {
            try {
              const orders = await fetchOrdersForCustomer(c.id);
              for (const order of orders) {
                if (order.state !== "COMPLETED") continue;
                const existingTx = await findTransactionBySquareOrderId(order.id);
                if (existingTx) {
                  transactionsSkipped++;
                  continue;
                }
                const txData = mapOrderToTransaction(order, clientId);
                await createTransaction(txData);
                transactionsImported++;
              }
            } catch (txErr) {
              errors.push(`Transactions for ${c.given_name}: ${txErr.message}`);
            }
          }
        } catch (err) {
          errors.push(`Customer ${c.given_name} ${c.family_name}: ${err.message}`);
        }
      }
      return { imported, skipped, transactionsImported, transactionsSkipped, errors };
    }),
    importInvoices: publicProcedure.input(import_zod2.z.object({
      squareIds: import_zod2.z.array(import_zod2.z.string())
    })).mutation(async ({ input }) => {
      const allInvoices = await fetchAllSquareInvoices();
      const allCustomers = await fetchAllSquareCustomers();
      const selected = allInvoices.filter((inv) => input.squareIds.includes(inv.id));
      let imported = 0;
      let skipped = 0;
      const errors = [];
      for (const inv of selected) {
        try {
          const existing = await findInvoiceBySquareId(inv.id);
          if (existing) {
            skipped++;
            continue;
          }
          let clientId = null;
          if (inv.primary_recipient?.customer_id) {
            const sqCustomer = allCustomers.find((c) => c.id === inv.primary_recipient?.customer_id);
            if (sqCustomer) {
              const crmClient = await findClientByEmailOrPhone(
                sqCustomer.email_address ?? null,
                sqCustomer.phone_number ?? null
              );
              clientId = crmClient?.id ?? null;
            }
          }
          if (!clientId && inv.primary_recipient) {
            const crmClient = await findClientByEmailOrPhone(
              inv.primary_recipient.email_address ?? null,
              inv.primary_recipient.phone_number ?? null
            );
            clientId = crmClient?.id ?? null;
          }
          if (!clientId) {
            errors.push(`Invoice ${inv.invoice_number ?? inv.id}: No matching client found. Import the customer first.`);
            skipped++;
            continue;
          }
          const payReq = inv.payment_requests?.[0];
          const amountCents = payReq?.computed_amount_money?.amount ?? 0;
          const mappedStatus = mapSquareInvoiceStatus(inv.status);
          await importInvoice({
            clientId,
            squareInvoiceId: inv.id,
            amount: String(amountCents / 100),
            description: inv.title ?? inv.description ?? `Square Invoice #${inv.invoice_number ?? inv.id}`,
            status: mappedStatus,
            dueDate: payReq?.due_date ? new Date(payReq.due_date) : void 0,
            paidAt: mappedStatus === "paid" ? /* @__PURE__ */ new Date() : void 0
          });
          imported++;
        } catch (err) {
          errors.push(`Invoice ${inv.invoice_number ?? inv.id}: ${err.message}`);
        }
      }
      return { imported, skipped, errors };
    })
  }),
  // ─── TRANSACTIONS ──────────────────────────────────────────────────────
  transactions: router({
    list: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number().optional() }).optional()).query(({ input }) => listTransactions(input?.clientId)),
    create: publicProcedure.input(import_zod2.z.object({
      clientId: import_zod2.z.number(),
      invoiceId: import_zod2.z.number().optional(),
      squarePaymentId: import_zod2.z.string().optional(),
      squareOrderId: import_zod2.z.string().optional(),
      amount: import_zod2.z.string(),
      type: import_zod2.z.enum(["payment_link", "pos", "invoice_payment", "manual", "refund"]).optional(),
      status: import_zod2.z.enum(["pending", "completed", "failed", "refunded"]).optional(),
      description: import_zod2.z.string().optional(),
      paymentMethod: import_zod2.z.string().optional(),
      paidAt: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      return createTransaction({
        ...input,
        paidAt: input.paidAt ? new Date(input.paidAt) : void 0
      });
    }),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      amount: import_zod2.z.string().optional(),
      type: import_zod2.z.enum(["payment_link", "pos", "invoice_payment", "manual", "refund"]).optional(),
      status: import_zod2.z.enum(["pending", "completed", "failed", "refunded"]).optional(),
      description: import_zod2.z.string().optional(),
      paymentMethod: import_zod2.z.string().optional(),
      paidAt: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      const updateData = { ...data };
      if (data.paidAt) updateData.paidAt = new Date(data.paidAt);
      return updateTransaction(id, updateData);
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteTransaction(input.id))
  }),
  // ─── CLIENT FINANCIAL SUMMARY ──────────────────────────────────────────
  clientFinancial: router({
    summary: publicProcedure.input(import_zod2.z.object({ clientId: import_zod2.z.number() })).query(({ input }) => getClientFinancialSummary(input.clientId))
  }),
  // ─── SALES PIPELINE ────────────────────────────────────────────────────
  salesPipeline: router({
    data: publicProcedure.query(() => getSalesPipelineData())
  }),
  // ─── EXPENSES ──────────────────────────────────────────────────────────
  expenses: router({
    list: publicProcedure.input(import_zod2.z.object({ category: import_zod2.z.string().optional(), startDate: import_zod2.z.string().optional(), endDate: import_zod2.z.string().optional() }).optional()).query(({ input }) => listExpenses(input ?? void 0)),
    create: publicProcedure.input(import_zod2.z.object({
      description: import_zod2.z.string().min(1),
      amount: import_zod2.z.string(),
      category: import_zod2.z.enum(["food", "supplies", "rent", "vet_fees", "utilities", "insurance", "marketing", "equipment", "maintenance", "other"]),
      vendor: import_zod2.z.string().optional(),
      date: import_zod2.z.string(),
      isRecurring: import_zod2.z.boolean().optional(),
      recurringFrequency: import_zod2.z.enum(["weekly", "biweekly", "monthly", "quarterly", "yearly"]).optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => createExpense({ ...input, date: new Date(input.date) })),
    update: publicProcedure.input(import_zod2.z.object({
      id: import_zod2.z.number(),
      description: import_zod2.z.string().optional(),
      amount: import_zod2.z.string().optional(),
      category: import_zod2.z.string().optional(),
      vendor: import_zod2.z.string().optional(),
      date: import_zod2.z.string().optional(),
      isRecurring: import_zod2.z.boolean().optional(),
      recurringFrequency: import_zod2.z.string().optional(),
      notes: import_zod2.z.string().optional()
    })).mutation(({ input }) => {
      const { id, ...data } = input;
      const updateData = { ...data };
      if (data.date) updateData.date = new Date(data.date);
      return updateExpense(id, updateData);
    }),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteExpense(input.id))
  }),
  // ─── PROFIT & LOSS ────────────────────────────────────────────────────
  profitLoss: router({
    data: publicProcedure.query(() => getProfitAndLossData())
  }),
  // ─── DOG DAILY LOGS ──────────────────────────────────────────────────────
  dogDailyLogs: router({
    get: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number(), logDate: import_zod2.z.string() })).query(({ input }) => getDogDailyLog(input.dogId, input.logDate)),
    list: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      limit: import_zod2.z.number().optional(),
      startDate: import_zod2.z.string().optional(),
      endDate: import_zod2.z.string().optional(),
      staffId: import_zod2.z.number().optional()
    })).query(({ input }) => listDogDailyLogs(input.dogId, {
      limit: input.limit,
      startDate: input.startDate,
      endDate: input.endDate,
      staffId: input.staffId
    })),
    upsert: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      logDate: import_zod2.z.string(),
      staffId: import_zod2.z.number().optional().nullable(),
      pottyMorning: import_zod2.z.boolean().optional(),
      pottyMidday: import_zod2.z.boolean().optional(),
      pottyEvening: import_zod2.z.boolean().optional(),
      pottyFinal: import_zod2.z.boolean().optional(),
      pottyNotes: import_zod2.z.string().optional().nullable(),
      feedingCompleted: import_zod2.z.boolean().optional(),
      feedingFoodType: import_zod2.z.string().optional().nullable(),
      feedingAmount: import_zod2.z.string().optional().nullable(),
      feedingSupplements: import_zod2.z.boolean().optional(),
      feedingConsumed: import_zod2.z.enum(["full", "partial", "refused"]).optional().nullable(),
      feedingNotes: import_zod2.z.string().optional().nullable(),
      medicationGiven: import_zod2.z.boolean().optional(),
      medicationTime: import_zod2.z.string().optional().nullable(),
      medicationNotes: import_zod2.z.string().optional().nullable(),
      activityCompleted: import_zod2.z.boolean().optional(),
      activityDuration: import_zod2.z.number().optional().nullable(),
      activitySpeed: import_zod2.z.string().optional().nullable(),
      activityNotes: import_zod2.z.string().optional().nullable(),
      trainingCompleted: import_zod2.z.boolean().optional(),
      trainingLocation: import_zod2.z.string().optional().nullable(),
      trainingDuration: import_zod2.z.string().optional().nullable(),
      trainingNotes: import_zod2.z.string().optional().nullable(),
      accidentOccurred: import_zod2.z.boolean().optional(),
      kennelCleaned: import_zod2.z.boolean().optional(),
      groomingBath: import_zod2.z.boolean().optional(),
      groomingBathDry: import_zod2.z.boolean().optional(),
      groomingBathDryNails: import_zod2.z.boolean().optional(),
      groomingEarCleaning: import_zod2.z.boolean().optional(),
      groomingDeshed: import_zod2.z.boolean().optional(),
      groomingDematting: import_zod2.z.boolean().optional(),
      accidentGroomingNotes: import_zod2.z.string().optional().nullable(),
      waterRefreshed: import_zod2.z.boolean().optional(),
      kennelChecked: import_zod2.z.boolean().optional(),
      waterCheckNotes: import_zod2.z.string().optional().nullable(),
      mediaUploaded: import_zod2.z.boolean().optional(),
      clientUpdateSent: import_zod2.z.boolean().optional(),
      statusAppetite: import_zod2.z.enum(["good", "warning", "bad"]).optional().nullable(),
      statusBehavior: import_zod2.z.enum(["good", "warning", "bad"]).optional().nullable(),
      statusHealth: import_zod2.z.enum(["good", "warning", "bad"]).optional().nullable()
    })).mutation(({ input }) => upsertDogDailyLog(input)),
    delete: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteDogDailyLog(input.id)),
    uploadPhoto: publicProcedure.input(import_zod2.z.object({
      dogId: import_zod2.z.number(),
      logDate: import_zod2.z.string(),
      base64: import_zod2.z.string(),
      mimeType: import_zod2.z.string().optional()
    })).mutation(async ({ input }) => {
      const mime = input.mimeType || "image/jpeg";
      const ext = mime.includes("png") ? "png" : "jpg";
      const buffer = Buffer.from(input.base64, "base64");
      const key = `dog-log-photos/${input.dogId}-${input.logDate}-${Date.now()}.${ext}`;
      const { url } = await storagePut(key, buffer, mime);
      const result = await createDogLogPhoto({
        dogId: input.dogId,
        fileUrl: url,
        logDate: input.logDate
      });
      return { id: result.id, url };
    }),
    photos: publicProcedure.input(import_zod2.z.object({ dogId: import_zod2.z.number(), logDate: import_zod2.z.string() })).query(({ input }) => listDogLogPhotos(input.dogId, input.logDate)),
    deletePhoto: publicProcedure.input(import_zod2.z.object({ id: import_zod2.z.number() })).mutation(({ input }) => deleteDogLogPhoto(input.id))
  }),
  // ─── FACILITY TASKS ──────────────────────────────────────────────────────
  facilityTasks: router({
    get: publicProcedure.input(import_zod2.z.object({ taskDate: import_zod2.z.string() })).query(({ input }) => getFacilityTask(input.taskDate)),
    list: publicProcedure.input(import_zod2.z.object({
      limit: import_zod2.z.number().optional(),
      startDate: import_zod2.z.string().optional(),
      endDate: import_zod2.z.string().optional()
    })).query(({ input }) => listFacilityTasks(input)),
    upsert: publicProcedure.input(import_zod2.z.object({
      taskDate: import_zod2.z.string(),
      staffId: import_zod2.z.number().optional(),
      kennelsWasteRemoved: import_zod2.z.boolean().optional(),
      kennelsSanitized: import_zod2.z.boolean().optional(),
      kennelsDried: import_zod2.z.boolean().optional(),
      floorsSweepVacuum: import_zod2.z.boolean().optional(),
      floorsMop: import_zod2.z.boolean().optional(),
      floorsSurfacesWiped: import_zod2.z.boolean().optional(),
      floorsHighTouchDisinfected: import_zod2.z.boolean().optional(),
      laundryCollected: import_zod2.z.boolean().optional(),
      laundryBagged: import_zod2.z.boolean().optional(),
      laundryToLaundromat: import_zod2.z.boolean().optional(),
      laundryFoldedRestocked: import_zod2.z.boolean().optional(),
      yardWastePickup: import_zod2.z.boolean().optional(),
      yardFenceCheck: import_zod2.z.boolean().optional(),
      waterHolesCleaned: import_zod2.z.boolean().optional(),
      waterKennelPails: import_zod2.z.boolean().optional(),
      foodMealsPortioned: import_zod2.z.boolean().optional(),
      foodBowlsSanitized: import_zod2.z.boolean().optional(),
      foodPrepAreaCleaned: import_zod2.z.boolean().optional(),
      middayDogsChecked: import_zod2.z.boolean().optional(),
      middayWaterRefreshed: import_zod2.z.boolean().optional(),
      closeoutFinalPotty: import_zod2.z.boolean().optional(),
      closeoutFeedingComplete: import_zod2.z.boolean().optional(),
      closeoutFinalKennelCheck: import_zod2.z.boolean().optional(),
      closeoutTrashOut: import_zod2.z.boolean().optional(),
      closeoutSecured: import_zod2.z.boolean().optional(),
      notes: import_zod2.z.string().optional().nullable()
    })).mutation(({ input }) => upsertFacilityTask(input))
  }),
  // ─── GOOGLE CALENDAR ──────────────────────────────────────────────────
  googleCalendar: router({
    status: publicProcedure.query(() => getAnyConnectionStatus()),
    getAuthUrl: publicProcedure.input(import_zod2.z.object({ redirectUri: import_zod2.z.string() })).query(({ input }) => {
      return { url: getAuthUrl(input.redirectUri) };
    }),
    connect: publicProcedure.input(import_zod2.z.object({ code: import_zod2.z.string(), redirectUri: import_zod2.z.string(), userId: import_zod2.z.number().optional() })).mutation(async ({ input, ctx }) => {
      const tokens = await exchangeCode(input.code, input.redirectUri);
      const userId = input.userId || ctx.user?.id || 1;
      await saveTokens(userId, tokens);
      return { success: true };
    }),
    disconnect: publicProcedure.input(import_zod2.z.object({ userId: import_zod2.z.number() })).mutation(async ({ input }) => {
      await removeTokens(input.userId);
      return { success: true };
    }),
    toggleSync: publicProcedure.input(import_zod2.z.object({ userId: import_zod2.z.number(), enabled: import_zod2.z.boolean() })).mutation(async ({ input }) => {
      await toggleSync(input.userId, input.enabled);
      return { success: true };
    }),
    setCalendar: publicProcedure.input(import_zod2.z.object({ userId: import_zod2.z.number(), calendarId: import_zod2.z.string() })).mutation(async ({ input }) => {
      await setCalendarId(input.userId, input.calendarId);
      return { success: true };
    }),
    listCalendars: publicProcedure.input(import_zod2.z.object({ userId: import_zod2.z.number() })).query(({ input }) => listGoogleCalendars(input.userId)),
    syncAll: publicProcedure.mutation(() => syncAllAppointmentsToGoogle()),
    syncOne: publicProcedure.input(import_zod2.z.object({ appointmentId: import_zod2.z.number() })).mutation(async ({ input }) => {
      const eventId = await syncAppointmentToGoogle(input.appointmentId);
      return { eventId };
    }),
    pullEvents: publicProcedure.input(import_zod2.z.object({ startDate: import_zod2.z.string(), endDate: import_zod2.z.string() })).query(({ input }) => pullGoogleCalendarEvents(input.startDate, input.endDate))
  })
});

// server/_core/context.ts
async function createContext(opts) {
  let user = null;
  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    user = null;
  }
  return {
    req: opts.req,
    res: opts.res,
    user
  };
}

// server/_core/index.ts
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = import_net.default.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}
async function findAvailablePort(startPort = 3e3) {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}
async function startServer() {
  const app = (0, import_express.default)();
  const server = (0, import_http.createServer)(app);
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
      return;
    }
    next();
  });
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ limit: "50mb", extended: true }));
  registerOAuthRoutes(app);
  registerMetaWebhookRoutes(app);
  registerMetaImportRoutes(app);
  app.get("/api/wakeup", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Savage K9 \u2013 Server Status</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #0f172a; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }
    .card { background: #1e293b; border-radius: 20px; padding: 40px 32px; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
    .logo { font-size: 3rem; margin-bottom: 16px; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
    .status { display: inline-flex; align-items: center; gap: 8px; background: #22c55e20; color: #4ade80; border: 1px solid #4ade8040; border-radius: 999px; padding: 6px 16px; font-size: 0.9rem; font-weight: 600; margin: 16px 0 24px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; animation: pulse 1.5s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
    p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px; }
    .btn { display: block; background: #3b82f6; color: white; text-decoration: none; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 1rem; margin-bottom: 12px; cursor: pointer; border: none; width: 100%; }
    .btn:active { opacity: 0.8; }
    .hint { font-size: 0.8rem; color: #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">&#128021;</div>
    <h1>Savage K9</h1>
    <div class="status"><span class="dot"></span> Server is Online</div>
    <p>The Savage K9 server is up and running. You can now open the app on your device.</p>
    <button class="btn" onclick="openApp()">Open App</button>
    <p class="hint">Bookmark this page to quickly wake up the server if the app is not connecting. If the app is not yet installed, close this page and open it from your home screen.</p>
  </div>
  <script>
    function openApp() {
      var deepLink = 'manus20260323153141://';
      var start = Date.now();
      window.location = deepLink;
      setTimeout(function() {
        if (Date.now() - start < 2000) {
          // App not installed or not responding \u2014 do nothing, just stay on page
        }
      }, 1500);
    }
  </script>
</body>
</html>`);
  });
  app.get("/api/privacy", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Privacy Policy \u2013 Savage K9</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f9f9f9; color: #1a1a1a; line-height: 1.7; }
    header { background: #1a1a2e; color: #fff; padding: 40px 24px 32px; text-align: center; }
    header h1 { font-size: 2rem; font-weight: 700; letter-spacing: -0.5px; }
    header p { margin-top: 8px; font-size: 0.95rem; color: #aab; }
    main { max-width: 760px; margin: 40px auto; padding: 0 24px 60px; }
    h2 { font-size: 1.2rem; font-weight: 700; margin: 32px 0 10px; color: #1a1a2e; }
    p { margin-bottom: 14px; font-size: 0.97rem; }
    ul { margin: 0 0 14px 20px; }
    ul li { margin-bottom: 6px; font-size: 0.97rem; }
    footer { text-align: center; padding: 24px; font-size: 0.85rem; color: #888; border-top: 1px solid #e0e0e0; }
    a { color: #0a7ea4; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
<header>
  <h1>Savage K9</h1>
  <p>Privacy Policy &nbsp;&middot;&nbsp; Last updated: April 30, 2026</p>
</header>
<main>
  <p>This Privacy Policy describes how <strong>Savage K9 Arizona LLC</strong> ("we," "us," or "our") collects, uses, and protects information in connection with the <strong>Savage K9</strong> mobile application (the "App"). The App is an internal business operations tool used exclusively by authorized staff members of Savage K9 Arizona LLC.</p>
  <h2>1. Who Uses This App</h2>
  <p>The Savage K9 app is not available to the general public. Access is restricted to employees and authorized staff of Savage K9 Arizona LLC. There is no public registration or sign-up process.</p>
  <h2>2. Information We Collect</h2>
  <p>We collect the following categories of information from authorized staff users:</p>
  <ul>
    <li><strong>Account information:</strong> Name, email address, and role within the organization.</li>
    <li><strong>Time and attendance data:</strong> Clock-in and clock-out timestamps, shift notes, and payroll records.</li>
    <li><strong>Dog care records:</strong> Daily logs, health notes, and activity records for dogs in our care.</li>
    <li><strong>Photos:</strong> Images uploaded by staff to document dog health concerns or daily care activities.</li>
    <li><strong>Facility task records:</strong> Completion status of daily facility checklists.</li>
    <li><strong>Device information:</strong> Basic device identifiers used for push notification delivery.</li>
  </ul>
  <h2>3. How We Use Information</h2>
  <p>All collected information is used solely for internal business operations, including:</p>
  <ul>
    <li>Managing employee schedules, time tracking, and payroll.</li>
    <li>Maintaining records of dog care, health, and training activities.</li>
    <li>Facilitating shift handoffs and internal staff communication.</li>
    <li>Sending internal push notifications and daily summary emails to authorized staff.</li>
  </ul>
  <h2>4. Data Sharing</h2>
  <p>We do not sell, rent, or share personal information with third parties for marketing or advertising purposes. Data may be shared with service providers who assist us in operating the App (such as cloud storage and email delivery services), solely for the purpose of providing those services and subject to confidentiality obligations.</p>
  <h2>5. Data Storage and Security</h2>
  <p>All data is stored on secure servers. We implement industry-standard technical and organizational measures to protect information against unauthorized access, loss, or misuse. Uploaded photos are stored in encrypted cloud storage.</p>
  <h2>6. Data Retention</h2>
  <p>We retain operational records (time entries, dog logs, facility tasks) for as long as necessary to fulfill business and legal obligations. Staff account data is removed upon termination of employment upon request.</p>
  <h2>7. Your Rights</h2>
  <p>Authorized staff members may request access to, correction of, or deletion of their personal data by contacting us at the email address below. We will respond to such requests within a reasonable timeframe.</p>
  <h2>8. Children's Privacy</h2>
  <p>The App is intended for use by adult employees only. We do not knowingly collect information from individuals under the age of 18.</p>
  <h2>9. Changes to This Policy</h2>
  <p>We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last updated" date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.</p>
  <h2>10. Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, please contact us at:<br /><strong>Savage K9 Arizona LLC</strong><br />Email: <a href="mailto:packleadermalachi@gmail.com">packleadermalachi@gmail.com</a></p>
</main>
<footer>&copy; 2026 Savage K9 Arizona LLC. All rights reserved.</footer>
</body>
</html>`);
  });
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, timestamp: Date.now() });
  });
  app.get("/api/google-calendar/callback", async (req, res) => {
    try {
      const code = req.query.code;
      if (!code) {
        res.status(400).send("Missing authorization code");
        return;
      }
      res.send(`
        <!DOCTYPE html>
        <html><head><title>Google Calendar Connected</title></head>
        <body style="font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f5f5">
          <div style="text-align:center;padding:2rem;background:white;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
            <h2 style="color:#22c55e">Google Calendar Connected!</h2>
            <p>You can close this window and return to the app.</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'gcal-auth', code: '${code}' }, '*');
              }
            </script>
          </div>
        </body></html>
      `);
    } catch (e) {
      console.error("[GCal] Callback error:", e);
      res.status(500).send("Failed to process Google Calendar authorization");
    }
  });
  app.use(
    "/api/trpc",
    (0, import_express2.createExpressMiddleware)({
      router: appRouter,
      createContext
    })
  );
  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);
  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }
  server.listen(port, () => {
    console.log(`[api] server listening on port ${port}`);
    startFollowupScheduler();
    startDailySummaryScheduler();
  });
}
startServer().catch(console.error);
